export const environment = {
    production: false,
    version: APP_VERSION,
    cfnBaseUrl: '',
    cookieDomain: 'localhost',
    sentry: {
        dsn: 'https://b2fb4d1579aa45c696dea2ff5734dbcd@o84378.ingest.sentry.io/5353451',
        environment: 'development',
        release: `${APP_ID}@${APP_VERSION}`,
    },
}
