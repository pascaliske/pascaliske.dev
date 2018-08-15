import { Path } from '@angular-devkit/core'
import { NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular'
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export interface WebpackOptions<T = NormalizedBrowserBuilderSchema> {
    root: Path
    projectRoot: Path
    options: T
    buildOptions: any
}

const command = process.argv[2].toLowerCase()

export default function(config: Configuration, options: WebpackOptions) {
    if (command === 'build' && options.buildOptions.enviroment === 'dev') {
        console.log('Adding BundleAnalyzerPlugin for debugging purposes.')
        config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
    }

    return config
}
