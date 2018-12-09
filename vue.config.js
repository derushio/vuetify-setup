require('dotenv').config();

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduct = process.env.NODE_ENV == 'production';

module.exports = {
    css: {
        sourceMap: !isProduct,
        loaderOptions: {
            stylus: {
                preferPathResolver: 'webpack',
            },
        },
    },
    configureWebpack: {
        devServer: {
            host: '0.0.0.0',
            disableHostCheck: true,
        },

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            },
            mainFields: ['browser', 'main', 'module'],
        },

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: !isProduct,
                    uglifyOptions: {
                        ecma: 8,
                        compress: {
                            warnings: false,
                        },
                    },
                }),
            ],
        },

        devtool: isProduct ? false : '#source-map',
    }
};
