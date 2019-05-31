// const { sync } = require('glob')
// const { join } = require('path')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
// const PurifyCSSPlugin = require('purifycss-webpack')
const VisualizerPlugin = require('webpack-visualizer-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

const pkg = require('./package.json')
const command = process.argv[2].toLowerCase()

module.exports = config => {
    config.plugins.push(new DashboardPlugin())

    if (command === 'build') {
        config.resolve.alias['@sentry/browser'] = '@sentry/browser/esm'
        config.resolve.alias['flatpickr'] = 'flatpickr/dist/flatpickr.min'
        config.resolve.alias['marked'] = 'marked/marked.min'
        config.plugins.push(
            // new PurifyCSSPlugin({
            //     paths: sync(join(__dirname, '**/*.html')),
            // }),
            new VisualizerPlugin({
                filename: './stats.html',
            }),
        )
    }

    config.plugins.push(
        new DefinePlugin({
            APP_VERSION: JSON.stringify(`v${pkg.version}`),
        }),
    )

    if (command === 'build' && process.env.TRAVIS_TAG && process.env.TRAVIS_TAG.length > 0) {
        config.plugins.push(
            new SentryWebpackPlugin({
                release: `v${pkg.version}`,
                include: 'dist/app',
                ignore: ['node_modules', 'ngw.config.ts'],
                dryRun: !process.env.TRAVIS_TAG || process.env.TRAVIS_TAG.length === 0,
            }),
        )
    }

    return config
}
