import { MiddlewareHandler, Context, Next } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { Environment } from '..'

// GET /
export const site: () => MiddlewareHandler<Environment> = () => {
    return (context: Context<Environment>, next: Next) => {
        // single-page-application support
        const handler: MiddlewareHandler<Environment> = context.req.path.includes('.')
            ? serveStatic({ root: './' })
            : serveStatic({ path: './index.html' })

        // response
        return handler(context, next)
    }
}
