import pkg from '../../package.json'

export const environment = {
    production: true,
    sentry: {
        dsn: 'https://da20741e2b93497caba31ff22a6290bc@sentry.io/1200530',
        options: {
            environment: 'production',
            release: `v${pkg.version}`,
        },
    },
}
