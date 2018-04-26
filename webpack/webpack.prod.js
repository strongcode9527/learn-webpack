const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js'),
      // UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      MinifyPlugin = require('babel-minify-webpack-plugin'),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      BabelPlugin = require('webpack-babel-plugin'),
      env = require('babel-preset-env')

module.exports = merge(common, {
  plugins: [
    new MinifyPlugin({}, {
      // minifyPreset: env
    }),
    new BabelPlugin({
      test: /\.js$/,
      babelOptions: {
        presets: [env]
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
})