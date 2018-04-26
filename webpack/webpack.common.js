var webpack = require('webpack'),
    path = require('path')

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '../src/index')],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-stage-2', 'babel-preset-react']
            }
          },
          'eslint-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}