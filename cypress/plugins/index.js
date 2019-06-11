const webpack = require('@cypress/webpack-preprocessor')

module.exports = on => {
    on(
        'file:preprocessor',
        webpack({
            webpackOptions: {
                resolve: {
                    extensions: ['.ts', '.js'],
                },
                module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            exclude: [/node_modules/],
                            use: [
                                {
                                    loader: 'ts-loader',
                                },
                            ],
                        },
                    ],
                },
            },
        }),
    )
}
