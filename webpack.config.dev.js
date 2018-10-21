const path = require('path');
const webpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 本番用
    entry: './src/index.tsx', // エントリポイントの指定
    devtool: 'inline-source-map', // デバッグ用
    module: {
        rules: [
            {　 // Linterの設定
                enforce: 'pre', // ビルド前処理
                loader: 'tslint-loader', // tslint-loaderを使うよ
                test: /\.tsx?$/, // tslint-loaderに渡すファイルの指定
                exclude: [ // node_module以下は除外
                    /node_modules/
                ],
                options: {
                    // tslintが出したwarningをエラー
                    emitErrors: true
                }
            },
            // tsloaderの設定
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    // TypeScriptのコンパイル設定ファイル
                    configFile: 'tsconfig.dev.json'
                }
            },
            // cssのloader設定(今less使ってないからlessはいらんかも)
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]--[local]--[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true,
                            searchDir: './src',
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        // importの時に受け入れられる拡張子
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        // 仕上がりファイルの置き場
        filename: 'static/js/bundle.js',
        // 出力ディレクトリの絶対パス
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpackPlugin({
            // 同じ階層にあるindex.htmlをもとにデプロイ用のindex.htmlを作ってくれる。
            template: 'index.html'
        })
    ]
}