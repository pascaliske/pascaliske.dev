import { MiddlewareHandler, Context, Next } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { logger } from '../utils/log'
import { Environment } from '..'

// GET /
export const site: () => MiddlewareHandler<Environment> = () => {
    const log = logger('site')

    return (context: Context<Environment>, next: Next) => {
        log(`Serving site for environment: ${context.env.ENVIRONMENT}`)

        // available pages
        const pages: string[] = ['/home', '/about', '/skills', '/work', '/contact', '/legal-notice']

        // serve static files, matching page or root index.html
        const handler: MiddlewareHandler<Environment> = context.req.path.includes('.')
            ? serveStatic({ root: '.' })
            : serveStatic({
                  path: pages.includes(context.req.path)
                      ? `${context.req.path}/index.html`
                      : './index.html',
              })

        // response
        return handler(context, next)
    }
}
