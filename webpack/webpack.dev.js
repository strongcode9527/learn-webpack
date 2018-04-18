const webpack = require('webpack'),
  merge = require('webpack-merge'),
  baseConfig = require('./webpack.common.js'),  
  HtmlWebpackPlugin = require('html-webpack-plugin')

  
var config = merge(
  baseConfig, {
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
  }
)

config.entry.unshift('react-dev-utils/webpackHotDevClient')

module.exports = config