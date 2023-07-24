import { Handler, Context } from 'hono'
import { logger } from '../utils/log'
import { Environment } from '..'

const baseUrl = 'https://analytics.pascaliske.dev'

export const event: () => Handler = () => {
    const log = logger('analytics')

    return async (context: Context<Environment>) => {
        log(`Proxying analytics events for ${context.env.ENVIRONMENT}`)

        // clone request
        const request = new Request(context.req.raw)

        // delete cookie header
        request.headers.delete('cookie')

        // forward request
        const response = await fetch(`${baseUrl}/api/event`, request)

        // clone response
        return new Response(response.body, response)
    }
}

export const script: () => Handler = () => {
    const log = logger('analytics')

    return async (context: Context<Environment>) => {
        log(`Proxying analytics script for ${context.env.ENVIRONMENT}`)

        // forward request
        const response = await fetch(`${baseUrl}/js/script.tagged-events.outbound-links.js`)

        // clone response
        return new Response(response.body, response)
    }
}
