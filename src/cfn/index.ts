import * as cors from 'cors'
import { config, https } from 'firebase-functions'
import { Request, Response } from 'express'
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
export const sendContactRequest = https.onRequest(async (req: Request, res: Response) => {
    // only allow same-origin requests
    security(req, res, () => {})

    try {
        const { name, email, subject, message } = req.body

        await transport.sendMail({
            to: 'info@pascal-iske.de',
            from: `"${name}" <${email}>`,
            replyTo: `"${name}" <${email}>`,
            subject: subject,
            html: message,
        })

        res.status(201).send()
    } catch (error) {
        res.status(500).send(error)
    }
})

/**
 * Sends an email with an given csp violation report.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {HttpsFunction}
 */
export const sendCspReport = https.onRequest(async (req: Request, res: Response) => {
    // only allow same-origin requests
    security(req, res, () => {})

    try {
        // try parsing the data
        const data = JSON.parse(req.body)

        if (!data || data.length === 0) {
            throw new Error('empty')
        }

        await transport.sendMail({
            to: 'info@pascal-iske.de',
            from: `"Pascal Iske" <info@pascal-iske.de>`,
            replyTo: `"Pascal Iske" <info@pascal-iske.de>`,
            subject: '[warn] csp violation report',
            html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
        })

        res.status(204).send()
    } catch (error) {
        res.status(204).send()
    }
})
