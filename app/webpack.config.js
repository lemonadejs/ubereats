const path = require('path');

module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        // contentBase
        static : {
            directory : path.join(__dirname, "public/")
        },
        port: 8000,
        // publicPath
        devMiddleware: {
            publicPath: "https://localhost:3000/dist/",
        },
        // hotOnly
        hot: "only",
    },
    stats: { warnings:false },
};