const webpack = require('webpack'),
  openBrowser = require('react-dev-utils/openBrowser'),
  webpackConfig = require('../webpack/webpack.dev'),
  webpackDevServer = require('webpack-dev-server'),
  chalk = require('chalk'),
  {
    choosePort,
    prepareUrls,
    createCompiler,
  } = require('react-dev-utils/WebpackDevServerUtils')

  
const options = {
  hot: true,
  hotOnly: true,
  contentBase: '/',
  historyApiFallback: true
}


//node命令行中取得变量，如果不存在，就取默认值。
const DEFAULT_PORT = +process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

choosePort(HOST, DEFAULT_PORT)
.then((port) => {
  const url = prepareUrls('http', HOST, port),
    compile = createCompiler(webpack, webpackConfig, 'learn-webpack', url),
    server = new webpackDevServer(compile, options)
    server.listen(port, HOST, err => {
      openBrowser(url.localUrlForBrowser)
    })
   
})