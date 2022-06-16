const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        Model: './src/range-slider/Model/Model.ts',
        View: './src/range-slider/View/View.ts',
        Presenter: './src/range-slider/Presenter/Presenter.ts',
        Demo: './src/demo-page/panel.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
    },
    plugins: [
        new webpack.ProvidePlugin( {
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/demo-page/index.pug'),
          filename: "index.html",
          inject: "body"
        }),
        new ESLintPlugin({
          extensions: ['.tsx', '.ts', '.js'],
          exclude: 'node_modules'
       }),
       new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css'
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
              }
            }
         },
         {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules|\.d\.ts$/,
        },
        {
          test: /\.d\.ts$/,
          loader: 'ignore-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
          }
        },
        {
            test: /\.svg$/,
            use: [
              {
                loader: 'svgo-loader',
              }
            ]
        },
        {
          test: /\.(scss|css)$/,
          use: [
            process.env.NODE_ENV !== 'production'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
      ]
    }
}