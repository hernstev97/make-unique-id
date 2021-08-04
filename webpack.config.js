const path = require('path');

module.exports = {
    mode: 'production',
    target: 'web',
    watchOptions: {
        ignored: ['node_modules', 'test'],
    },
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        library: 'getUniqueId',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
};