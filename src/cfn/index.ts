import * as functions from 'firebase-functions'
import * as cors from 'cors'
import { createTransport, SendMailOptions } from 'nodemailer'

// configure cors
const security = cors({
    origin: ['https://pascal-iske.de'],
})

// configure mail transport.
const transport = createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.password,
    },
})

/**
 * Sends an email with the given data.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export const sendContactRequest = functions.https.onRequest((req, res) => {
    security(req, res, () => {
        const { name, email, subject, message } = req.body
        const mail: SendMailOptions = {
            to: 'info@pascal-iske.de',
            from: `"${name}" <${email}>`,
            replyTo: `"${name}" <${email}>`,
            subject: subject,
            html: message,
        }

        transport
            .sendMail(mail)
            .then(() => {
                res.status(201).send()
            })
            .catch(error => {
                res.status(500).send(error)
            })
    })
})
