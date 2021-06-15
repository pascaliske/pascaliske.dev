/// <reference types="node" />

import { Configuration, DefinePlugin } from 'webpack'
import * as DashboardPlugin from 'webpack-dashboard/plugin'
import * as VisualizerPlugin from 'webpack-visualizer-plugin2'
import * as PacktrackerPlugin from '@packtracker/webpack-plugin'
import { name, version } from './package.json'

export default (config: Configuration): Configuration => {
    const command = process.argv?.[2]?.toLowerCase()

    config.plugins.push(new DashboardPlugin())

    if (command === 'build') {
        config.resolve.alias = {}
        config.resolve.alias['@sentry/browser'] = '@sentry/browser/esm'
        config.resolve.alias['flatpickr'] = 'flatpickr/dist/flatpickr.min'
        config.resolve.alias['marked'] = 'marked/marked.min'
        config.plugins.push(
            new VisualizerPlugin({
                filename: './stats.html',
            }),
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
