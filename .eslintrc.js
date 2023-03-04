module.exports = {
    root: true,
    extends: '@pascaliske/eslint-config/angular',
    plugins: ['cypress'],
    parserOptions: {
        project: `${__dirname}/tsconfig.json`,
        createDefaultProgram: true,
    },
    env: {
        browser: true,
        node: true,
        'cypress/globals': true,
    },
    globals: {
        APP_ID: 'readonly',
        APP_VERSION: 'readonly',
    },
}
