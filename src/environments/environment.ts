// tslint:disable-next-line
const pkg = require('../../package.json')

export const environment = {
    production: false,
    release: `v${pkg.version}`,
    cfnBaseUrl: 'https://us-central1-pascal-iske-de.cloudfunctions.net',
    cookieDomain: 'localhost',
    sentry: {
        dsn: 'https://da20741e2b93497caba31ff22a6290bc@sentry.io/1200530',
        environment: 'development',
        release: `v${pkg.version}`,
    },
}
