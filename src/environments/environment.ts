import pkg from '../../package.json'

export const environment = {
    production: false,
    sentry: {
        dsn: 'https://da20741e2b93497caba31ff22a6290bc@sentry.io/1200530',
        environment: 'development',
        release: `v${pkg.version}`,
    },
}
