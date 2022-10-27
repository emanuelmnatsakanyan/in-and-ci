const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


const config = {
    entry: {
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    resolve: {
        fallback: {
            "stream": false,
            "buffer": require.resolve("buffer/")
        }
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new NodePolyfillPlugin(),
        new StatoscopePlugin({
            saveReportTo: './report-[name]-[hash].html',
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            // @TODO js rule
            // @TODO css rule
        ],
    },
    
    // @TODO optimizations
    // @TODO lodash treeshaking
    // @TODO chunk for lodash
    // @TODO chunk for runtime
    // @TODO fallback for crypto
};

module.exports = config;
