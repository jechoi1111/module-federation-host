const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/enhanced/webpack').ModuleFederationPlugin
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ExternalTemplateRemotesPlugin(),
        new ModuleFederationPlugin({
        name: 'webpack_host',
        remotes: {
            webpack_remote: `webpack_remote@http://localhost:3000/remoteEntry.js`,
            // remote_host: 'remote_host@http://localhost:2000/remoteEntry.js'
        },
            shared: {
                react: {singleton: true},
                "react-dom": {singleton: true},
                // zustand: {singleton: true}
            },
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
            }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        experimentalWatchApi: true,
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3001,
        hot: true
    }
}