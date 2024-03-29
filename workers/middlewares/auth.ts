import { MiddlewareHandler, Context, Next } from 'hono'
import { basicAuth as honoBasicAuth } from 'hono/basic-auth'
import { logger } from '../utils/log'
import { Environment } from '..'

export const auth: () => MiddlewareHandler<Environment> = () => {
    const log = logger('auth')

    return (context: Context<Environment, string>, next: Next) => {
        // skip auth on non-staging environments
        if (context.env.ENVIRONMENT === 'production') {
            log(`Skipped auth due to environment: ${context.env.ENVIRONMENT}`)
            return next()
        }

        // setup auth middleware
        const handler: MiddlewareHandler<Environment> = honoBasicAuth({
            realm: 'Staging',
            username: context.env.AUTH_USERNAME,
            password: context.env.AUTH_PASSWORD,
        })

        // continue
        return handler(context, next)
    }
}
