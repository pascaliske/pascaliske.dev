const DefinePlugin = require('webpack/lib/DefinePlugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const VisualizerPlugin = require('webpack-visualizer-plugin')
const PacktrackerPlugin = require('@packtracker/webpack-plugin')

const pkg = require('./package.json')
const command = process.argv[2].toLowerCase()

module.exports = config => {
    config.plugins.push(new DashboardPlugin())

    if (command === 'build') {
        config.resolve.alias['@sentry/browser'] = '@sentry/browser/esm'
        config.resolve.alias['flatpickr'] = 'flatpickr/dist/flatpickr.min'
        config.resolve.alias['marked'] = 'marked/marked.min'
        config.plugins.push(
            new VisualizerPlugin({
                filename: './stats.html',
            }),
        )
    }

    config.plugins.push(
        new DefinePlugin({
            APP_VERSION: JSON.stringify(`v${pkg.version}`),
        }),
        new PacktrackerPlugin({
            branch: process.env.TRAVIS_BRANCH,
            upload: process.env.CI === 'true',
        })
    )

    return config
}
