export const environment = {
    production: true,
    version: APP_VERSION,
    cfnBaseUrl: '/cfns',
    cookieDomain: 'pascal-iske.de',
    sentry: {
        dsn: 'https://da20741e2b93497caba31ff22a6290bc@sentry.io/1200530',
        environment: 'production',
        release: `pascal-iske-de@${APP_VERSION}`,
    },
}
