const webpack = require('webpack'),
      config = require('../webpack/webpack.prod'),
      compiler = webpack(config)

compiler.run(()=>{
  console.log('product success')
})