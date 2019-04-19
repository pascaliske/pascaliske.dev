import { Path } from '@angular-devkit/core'
import { NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular'
import { join } from 'path'
import { sync } from 'glob'
import { Configuration } from 'webpack'
import * as DashboardPlugin from 'webpack-dashboard/plugin'
import * as PurifyCSSPlugin from 'purifycss-webpack'
import * as VisualizerPlugin from 'webpack-visualizer-plugin'
import * as SentryWebpackPlugin from '@sentry/webpack-plugin'
import * as ContentReplacePlugin from 'content-replace-webpack-plugin'

export interface WebpackOptions<T = NormalizedBrowserBuilderSchema> {
    root: Path
    projectRoot: Path
    options: T
}

// tslint:disable-next-line
const pkg = require('./package.json')
const command = process.argv[2].toLowerCase()

export default function(config: Configuration): Configuration {
    config.plugins.push(new DashboardPlugin())

    if (command === 'build') {
        config.resolve.alias['@sentry/browser'] = '@sentry/browser/esm'
        config.resolve.alias['flatpickr'] = 'flatpickr/dist/flatpickr.min'
        config.resolve.alias['marked'] = 'marked/marked.min'
        config.plugins.push(
            new PurifyCSSPlugin({
                paths: sync(join(__dirname, '**/*.html')),
            }),
            new SentryWebpackPlugin({
                release: `v${pkg.version}`,
                include: 'dist/app',
                ignore: ['node_modules', 'ngw.config.ts'],
                dryRun: !process.env.TRAVIS_TAG || process.env.TRAVIS_TAG.length === 0,
            }),
            new VisualizerPlugin({
                filename: './stats.html',
            }),
        )
    }

    config.plugins.push(
        new ContentReplacePlugin({
            rules: {
                '*': (bundle: string) => {
                    return bundle.replace(new RegExp('APP_VERSION', 'g'), `v${pkg.version}`)
                },
            },
        }),
    )

    return config
}
