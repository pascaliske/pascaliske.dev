import { Path } from '@angular-devkit/core'
import { NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular'
import { join } from 'path'
import { sync } from 'glob'
import * as ReplacePlugin from 'webpack-plugin-replace'
import * as PurifyCSSPlugin from 'purifycss-webpack'
import * as VisualizerPlugin from 'webpack-visualizer-plugin'

export interface WebpackOptions<T = NormalizedBrowserBuilderSchema> {
    root: Path
    projectRoot: Path
    options: T
}

// tslint:disable-next-line
const pkg = require('./package.json')
const command = process.argv[2].toLowerCase()

export default function(config) {
    if (command === 'build') {
        config.resolve.alias['marked'] = 'marked/marked.min'
        config.plugins.push(
            new ReplacePlugin({
                include: ['environment.ts'],
                values: {
                    SENTRY_RELEASE: `v${pkg.version}`,
                },
            }),
            new PurifyCSSPlugin({
                paths: sync(join(__dirname, '**/*.html')),
            }),
            new VisualizerPlugin({
                filename: './stats.html',
            }),
        )
    }

    return config
}
