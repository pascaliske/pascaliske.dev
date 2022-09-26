// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const webpack = require('@cypress/webpack-preprocessor')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (on, config) => {
    const preprocessor = webpack({
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
    })

    on('file:preprocessor', preprocessor)
}
