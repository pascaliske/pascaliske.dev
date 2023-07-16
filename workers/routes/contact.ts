import { Handler, Context } from 'hono'
import type { ContactFormGroup } from 'pages/contact/contact.component'
import { logger } from '../utils/log'
import { CreatedResponse, BadRequestResponse, InternalServerErrorResponse } from '../responses'
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
    const log = logger('contact')

    return async (context: Context<Environment>) => {
        const data: Record<keyof ContactFormGroup, string> = await context.req.json()

        // check honeypot field
        if (data.prefix.length > 0) {
            return new BadRequestResponse('Invalid request data!', ['prefix'])
        }

        // check email field
        if (data.email.length === 0) {
            return new BadRequestResponse('Invalid request data!', ['email'])
        }

        // check message field
        if (data?.message?.length === 0) {
            return new BadRequestResponse('Invalid request data!', ['message'])
        }

        // prepare forward request
        const url: URL = new URL('https://api.mailchannels.net/tx/v1/send')

        const headers: Headers = new Headers()
        headers.set('Accept', 'application/json')
        headers.set('Content-Type', 'application/json')

        const body: string = JSON.stringify({
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
        })

        // activate dry-run on staging
        if (context.env.ENVIRONMENT === 'staging') {
            url.searchParams.set('dry-run', 'true')
        }

        // forward request
        const request: Request = new Request(url, { method: 'POST', headers, body })
        const response: Response = await fetch(request)

        // debug forwarded request
        log(`Forwarded request to ${url}`, {
            request: JSON.stringify({ headers, body }),
            response: JSON.stringify({
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                body: await response.text(),
            }),
        })

        // response
        switch (response.status) {
            // success
            case 200:
            case 202:
                return new CreatedResponse('Successfully sent contact request!')

            // bad request
            case 400:
                return new BadRequestResponse('Invalid request data!')

            // error
            default:
                return new InternalServerErrorResponse(
                    'Internal server error!',
                    response.statusText,
                )
        }
    }
}
