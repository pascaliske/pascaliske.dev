import * as cors from 'cors'
import { config, https } from 'firebase-functions'
import { Response } from 'express'
import { createTransport } from 'nodemailer'

// configure cors
const security = cors({
    origin: ['https://pascal-iske.de'],
})

// configure mail transport.
const transport = createTransport({
    service: 'gmail',
    auth: {
        user: config().gmail.email,
        pass: config().gmail.password,
    },
})

/**
 * Sends an email with the given data.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {HttpsFunction}
 */
export const sendContactRequest = https.onRequest((req: any, res: Response) => {
    // only allow same-origin requests
    security(req, res, () => {})

    transport
        .sendMail({
            to: 'info@pascal-iske.de',
            from: `"${req.body.name}" <${req.body.email}>`,
            replyTo: `"${req.body.name}" <${req.body.email}>`,
            subject: req.body.subject,
            html: req.body.message,
        })
        .then(() => {
            res.status(201).send()
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

/**
 * Sends an email with an given csp violation report.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {HttpsFunction}
 */
export const sendCspReport = https.onRequest((req: any, res: Response) => {
    // only allow same-origin requests
    security(req, res, () => {})

    // try parsing the data
    const data = JSON.parse(req.body)

    if (!data || data.length === 0) {
        return res.status(204).send()
    }

    transport
        .sendMail({
            to: 'info@pascal-iske.de',
            from: `"Pascal Iske" <info@pascal-iske.de>`,
            replyTo: `"Pascal Iske" <info@pascal-iske.de>`,
            subject: '[warn] csp violation report',
            html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
        })
        .finally(() => {
            res.status(204).send()
        })
})
