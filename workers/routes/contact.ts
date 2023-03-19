import { Handler, Context } from 'hono'
import type { ContactFormGroup } from 'pages/contact/contact.component'
import { Environment } from '..'

type ContactFormRequest = Record<keyof ContactFormGroup, string>

function template({ name, email, subject, message }: ContactFormRequest): string {
    return `
Hi, Pascal!

A new contact request just came in:

Name: ${name?.length > 0 ? name : 'Unknown'}
E-Mail: ${email}
Subject: ${subject}

${message}
`
}

// POST /api/contact
export const contact: () => Handler = () => {
    return async (context: Context<Environment>) => {
        const data: Record<keyof ContactFormGroup, string> = await context.req.json()

        // check honeypot field
        if (data?.prefix?.length > 0) {
            return context.json({}, 400)
        }

        // check email field
        if (data?.email?.length === 0) {
            return context.json({}, 400)
        }

        // process request
        const request: Request = new Request('https://api.mailchannels.net/tx/v1/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                from: { email: 'no-reply@pascaliske.dev', name: 'Pascal Iske' },
                // eslint-disable-next-line camelcase
                reply_to: { email: data.email, name: data.name },
                personalizations: [
                    {
                        to: [{ email: 'info@pascaliske.dev', name: 'Pascal Iske' }],
                    },
                ],
                subject: `Contact Request from ${data.email}`,
                content: [
                    {
                        type: 'text/plain',
                        value: template(data),
                    },
                ],
            }),
        })

        // process response
        const response: Response = await fetch(request)
        const body: string = await response.json()

        // response
        return context.json(body)
    }
}
