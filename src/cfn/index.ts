import * as cors from 'cors'
import { config, https } from 'firebase-functions'
import { Request, Response } from 'express'
import { createTransport } from 'nodemailer'

// configure cors
const security = cors({
    origin: ['https://pascaliske.dev'],
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
export const sendContactRequest = https.onRequest((req: Request, res: Response) => {
    // only allow same-origin requests
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    security(req, res, () => {})

    transport
        .sendMail({
            to: 'info@pascaliske.dev',
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
export const sendCspReport = https.onRequest((req: Request, res: Response) => {
    // only allow same-origin requests
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    security(req, res, () => {})

    // try parsing the data
    const data = JSON.parse(req.body as string)

    if (!data || data.length === 0) {
        res.status(204).send()
        return
    }

    transport
        .sendMail({
            to: 'info@pascaliske.dev',
            from: `"Pascal Iske" <info@pascaliske.dev>`,
            replyTo: `"Pascal Iske" <info@pascaliske.dev>`,
            subject: '[warn] csp violation report',
            html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
        })
        .finally(() => {
            res.status(204).send()
        })
})
