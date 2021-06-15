export const environment = {
    production: true,
    version: APP_VERSION,
    cfnBaseUrl: '/cfns',
    cookieDomain: 'pascaliske.dev',
    sentry: {
        dsn: 'https://b2fb4d1579aa45c696dea2ff5734dbcd@o84378.ingest.sentry.io/5353451',
        environment: 'production',
        release: `${APP_ID}@${APP_VERSION}`,
    },
}
