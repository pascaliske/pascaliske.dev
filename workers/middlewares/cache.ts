import { extname } from 'node:path'
import { MiddlewareHandler, Context, Next } from 'hono'
import { cache as honoCache } from 'hono/cache'
import { logger } from '../utils/log'
import { Environment } from '..'

const enum CACHE {
    // no cache
    NONE = 'no-cache, no-store, must-revalidate',

    // 1 hour
    SHORT = 'max-age=3600',

    // 6 months
    LONG = 'max-age=15778476',
}

function getCacheControl(path: string): CACHE {
    // do not cache html
    if (!path.includes('.')) {
        return CACHE.NONE
    }

    // cache static files based on extension for a longer period
    switch (extname(path)) {
        case '.js':
        case '.css':
        case '.map':
        case '.woff':
        case '.woff2':
        case '.jpg':
        case '.png':
            return CACHE.LONG
    }

    // cache everything else for a short period
    return CACHE.SHORT
}

export const cache: () => MiddlewareHandler<Environment> = () => {
    const log = logger('cache')

    return (context: Context<Environment>, next: Next) => {
        // skip cache on staging environment
        if (context.env.ENVIRONMENT !== 'production') {
            log(`Skipped cache setup due to environment: ${context.env.ENVIRONMENT}`)
            return next()
        }

        const handler: MiddlewareHandler<Environment> = honoCache({
            cacheName: 'pascaliske-dev',
            cacheControl: getCacheControl(context.req.path),
        })

        return handler(context, next)
    }
}
