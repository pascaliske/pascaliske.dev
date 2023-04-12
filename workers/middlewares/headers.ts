import { MiddlewareHandler, Context, Next } from 'hono'
import { Environment } from '..'

// `Content-Security-Policy` values
const cspValues = [
    `default-src 'self'`,
    `connect-src 'self' analytics.pascaliske.dev`,
    `script-src 'self' 'unsafe-inline' analytics.pascaliske.dev`,
    `style-src 'self' 'unsafe-inline'`,
    `font-src 'self'`,
    `img-src 'self'`,
    `object-src 'none'`,
]

// `Permissions-Policy` values
const ppValues = [
    'accelerometer=()',
    'ambient-light-sensor=()',
    'autoplay=()',
    'camera=()',
    'encrypted-media=()',
    'fullscreen=()',
    'geolocation=()',
    'gyroscope=()',
    'magnetometer=()',
    'microphone=()',
    'midi=()',
    'payment=()',
    'picture-in-picture=()',
    'sync-xhr=(*)',
    'usb=()',
    'interest-cohort=()',
]

export const headers: () => MiddlewareHandler<Environment> = () => {
    return async (context: Context<Environment>, next: Next) => {
        // continue
        await next()

        // apply headers
        context.header('Content-Security-Policy', cspValues.join('; '))
        context.header('Permissions-Policy', ppValues.join(', '))
        context.header('Referrer-Policy', 'strict-origin-when-cross-origin')
        context.header('X-Content-Type-Options', 'nosniff')
        context.header('X-Frame-Options', 'SAMEORIGIN')
        context.header('X-XSS-Protection', '1; mode=block')
    }
}
