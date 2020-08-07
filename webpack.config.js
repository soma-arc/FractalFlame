require('babel-core/register');
const webpack = require('webpack');
const path = require('path');

const src  = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'docs');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = () => ({
    entry: `${src}/index.js`,

    output: {
        path: dist,
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.vue$/, loader: 'vue-loader'
            },
            {
                test: /\.(glsl|vert|frag)$/,
                exclude: /\.(njk|nunjucks)\.(glsl|vert|frag)$/,
                loader: 'shader-loader',
            },
            {
                test: /\.(njk|nunjucks)\.(glsl|vert|frag)$/,
                loader: 'nunjucks-loader',
                query: {
                    root: `${__dirname}/src`,
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules(?!(\/|\\)keen-ui)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { modules: false }]]
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]},

    devtool: (process.env.NODE_ENV === 'production') ? false : 'inline-source-map',

    resolve: {
        extensions: ['.js'],
    },

    devServer: {
        contentBase: 'docs',
        port: 3000,
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new VueLoaderPlugin()
    ]
});
