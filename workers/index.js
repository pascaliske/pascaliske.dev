import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler'

// `Content-Security-Policy` values
const cspValues = [
    `default-src 'self'`,
    `connect-src 'self' sentry.io *.sentry.io fonts.googleapis.com fonts.gstatic.com www.googletagmanager.com www.google-analytics.com`,
    `style-src 'self' 'unsafe-inline' fonts.googleapis.com`,
    `script-src 'self' 'unsafe-inline' www.googletagmanager.com www.google-analytics.com`,
    `img-src 'self'`,
    `font-src fonts.gstatic.com`,
    `object-src 'none'`,
    `report-uri https://sentry.io/api/1200530/security/?sentry_key=da20741e2b93497caba31ff22a6290bc&sentry_environment=production`,
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

const headers = new Headers()
headers.set('Content-Security-Policy', cspValues.join('; '))
headers.set('Permissions-Policy', ppValues.join(', '))
headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
headers.set('X-Content-Type-Options', 'nosniff')
headers.set('X-Frame-Options', 'SAMEORIGIN')
headers.set('X-XSS-Protection', '1; mode=block')

/**
 * @param {Error} error
 * @returns {Response}
 */
function handleError(error) {
    if (!error) {
        return new Response('Internal error', { status: 500 })
    }

    return new Response(error.message || error.toString(), { status: 500 })
}

/**
 * @param {FetchEvent} event
 * @returns {Promise<Response>}
 */
async function handleEvent(event) {
    const options = {
        mapRequestToAsset: serveSinglePageApp,
    }

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const page = await getAssetFromKV(event, options)
        const response = new Response(page.body, page)

        // apply headers
        headers.forEach((value, name) => response.headers.set(name, value))

        return response
    } catch (error) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const response = await getAssetFromKV(event, {
                mapRequestToAsset: request => {
                    return new Request(`${new URL(request.url).origin}/404.html`, request)
                },
            })

            return new Response(response.body, { ...response, status: 404 })
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            return handleError(error)
        }
    }
}

addEventListener('fetch', event => {
    try {
        event.respondWith(handleEvent(event))
    } catch (error) {
        event.respondWith(handleError(null))
    }
})
