module.exports = function config(api) {
    api.cache(true);
    switch (process.env.NODE_ENV) {
        case 'development':
            return {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ],
            }
        case 'production':
            return {
                presets: [
                    '@babel/preset-env',
                    {
                        targets: {
                            ie: 9,
                        },
                        forceAllTransforms: true
                    },
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-transform-react-constant-elements',
                    'transform-react-remove-prop-types'
                ],
            }
        case 'test':
            return {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ],
            }
            
        default:
            return {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ],
            }
    }
}
