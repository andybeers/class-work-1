const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // path: './build',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([{ 
            from: './src/images',
            to: 'images'
        }])
    ],
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        },  
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};