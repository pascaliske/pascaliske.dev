/// <reference types="node" />

import { Configuration, DefinePlugin } from 'webpack'
import * as PacktrackerPlugin from '@packtracker/webpack-plugin'
import { name, version } from './package.json'

export default (config: Configuration): Configuration => {
    const command = process.argv?.[2]?.toLowerCase()

    if (command === 'build') {
        /* eslint-disable dot-notation */
        config.resolve.alias = {}
        config.resolve.alias['@sentry/browser'] = '@sentry/browser/esm'
        config.resolve.alias['flatpickr'] = 'flatpickr/dist/flatpickr.min'
        /* eslint-enable dot-notation */

        // plugins
        config.plugins.push(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            new PacktrackerPlugin({
                branch: process.env.GITHUB_REF.replace('refs/heads/', ''),
                upload: process.env.CI === 'true',
            }),
        )
    }

    config.plugins.push(
        new DefinePlugin({
            APP_ID: JSON.stringify(name),
            APP_VERSION: JSON.stringify(`v${version}`),
        }),
    )

    return config
}
