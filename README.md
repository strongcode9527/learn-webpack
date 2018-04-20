# learn-webpack
学习webpack各种优化方式，包括code-spliting以及tree-shaking

## code-spliting

主要是使用import(),来进行，代码分割，达到优化代码的效果。根据文档来实现也不大难

https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html


## public

除了直接在config中设置public path之外，还可以直接修改filename达到public path的效果,这样还有一个好处就是在构建生产环境的时候，还可以直接将js文件打包到一个文件夹，和html文件隔离

```
filename: 'scripts/[name].[hash].bundle.js',

```



