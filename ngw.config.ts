import { Path } from '@angular-devkit/core'
import { NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular'
import { join } from 'path'
import { sync } from 'glob'
import { Configuration } from 'webpack'
import * as PurifyCSSPlugin from 'purifycss-webpack'
import * as VisualizerPlugin from 'webpack-visualizer-plugin'

export interface WebpackOptions<T = NormalizedBrowserBuilderSchema> {
    root: Path
    projectRoot: Path
    options: T
}

const command = process.argv[2].toLowerCase()

export default function(config: Configuration, options: WebpackOptions) {
    if (command === 'build') {
        config.plugins.push(
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
