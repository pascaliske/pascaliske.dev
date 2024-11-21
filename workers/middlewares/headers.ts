import { MiddlewareHandler, Context, Next } from 'hono'
import { logger } from '../utils/log'
import { Environment } from '..'

// `Content-Security-Policy` values
const cspValues = [
    `default-src 'self'`,
    `connect-src 'self'`,
    `script-src 'self' 'unsafe-inline'`,
    `style-src 'self' 'unsafe-inline'`,
    `font-src 'self'`,
    `img-src 'self'`,
    `object-src 'none'`,
]

// `Permissions-Policy` values
const ppValues = [
    'accelerometer=()',
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
    const log = logger('headers')

    return async (context: Context<Environment>, next: Next) => {
        log('Applying custom headers for security')

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
