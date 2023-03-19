import { MiddlewareHandler, Context, Next } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { Environment } from '..'

export const auth: () => MiddlewareHandler<Environment> = () => {
    return (context: Context<Environment>, next: Next) => {
        // skip auth on non-staging environments
        if (context.env.ENVIRONMENT !== 'staging') {
            return next()
        }

        // setup auth middleware
        const handler: MiddlewareHandler<Environment> = basicAuth({
            realm: 'Staging',
            username: context.env.AUTH_USERNAME,
            password: context.env.AUTH_PASSWORD,
        })

        // continue
        return handler(context, next)
    }
}
