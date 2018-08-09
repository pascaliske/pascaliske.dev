import pkg from '../../package.json'

export const environment = {
    production: true,
    cfnBaseUrl: 'https://us-central1-pascal-iske-de.cloudfunctions.net',
    sentry: {
        dsn: 'https://da20741e2b93497caba31ff22a6290bc@sentry.io/1200530',
        environment: 'production',
        release: `v${pkg.version}`,
    },
}
