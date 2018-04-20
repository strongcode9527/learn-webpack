const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BundleAnalyzerPlugin()
  ]
})