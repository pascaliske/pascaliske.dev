import { Handler, Context } from 'hono'
import { logger } from '../utils/log'
import { Environment } from '..'

const baseUrl = 'https://analytics.pascaliske.dev'

export const event: () => Handler = () => {
    const log = logger('analytics')

    return (context: Context<Environment>) => {
        log(`Proxying analytics events for ${context.env.ENVIRONMENT}`)

        // clone request
        const request = new Request(context.req.raw)

        // delete cookie header
        request.headers.delete('cookie')

        // forward request
        return fetch(`${baseUrl}/api/event`, request)
    }
}

export const script: () => Handler = () => {
    const log = logger('analytics')

    return (context: Context<Environment>) => {
        log(`Proxying analytics script for ${context.env.ENVIRONMENT}`)

        // forward request
        return fetch(`${baseUrl}/js/script.tagged-events.outbound-links.js`)
    }
}
