import { Path } from '@angular-devkit/core'
import { NormalizedBrowserBuilderSchema } from '@angular-devkit/build-angular'
import { Configuration } from 'webpack'

export interface WebpackOptions<T = NormalizedBrowserBuilderSchema> {
    root: Path
    projectRoot: Path
    options: T
}

const command = process.argv[2].toLowerCase()

export default function(config: Configuration, options: WebpackOptions) {
    return config
}
