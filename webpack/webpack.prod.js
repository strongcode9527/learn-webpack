const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js'),
      // UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      MinifyPlugin = require('babel-minify-webpack-plugin'),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      BabelPlugin = require('webpack-babel-plugin'),
      env = require('webpack-preset-env')

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MinifyPlugin({}, {
      // minifyPreset: env
    }),
    new BabelPlugin({
      presets: [env]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
})