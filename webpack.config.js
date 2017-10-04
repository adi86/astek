module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};