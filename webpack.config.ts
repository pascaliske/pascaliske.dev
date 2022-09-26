/// <reference types="node" />

import { Configuration, DefinePlugin } from 'webpack'
import { name, version } from './package.json'

export default (config: Configuration): Configuration => {
    const command = process.argv?.[2]?.toLowerCase()

    if (command === 'build') {
        /* eslint-disable dot-notation */
        config.resolve.alias = {}
        config.resolve.alias['@sentry/browser'] = '@sentry/browser/esm'
        config.resolve.alias['flatpickr'] = 'flatpickr/dist/flatpickr.min'
        /* eslint-enable dot-notation */
    }

    config.plugins.push(
        new DefinePlugin({
            APP_ID: JSON.stringify(name),
            APP_VERSION: JSON.stringify(`v${version}`),
        }),
    )

    return config
}
