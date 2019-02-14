const path = require('path'),
      webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
               test: /\.js$/,
               loader: 'babel-loader',
               query: {
                    presets: ['es2015']
               }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
