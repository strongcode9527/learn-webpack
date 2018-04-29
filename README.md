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

## tree-shaking 学习完成。并且基本能够完成class的tree-shaking。

首先说明原因：class会被babel编译成tree-shaking无法消除的代码。所以我们只有一种解决方式：

**先进行tree-shaking，然后在对bundle进行babel编译。**


但是在这里我们也需要注意一个问题。那就是在tree-shaking之前，我们还是需要进行babel的编译的，那就是吧stage-x的代码，编译成标准的js语法。以便于webpack 语法树编译器识别，否则实验性质的js语法，会使得webpack无法识别。



所以对class进行tree-shaking有四个步骤：


1.babel将实验性质的代码，编译成标准代码。对于react技术栈来说第一步需要两个插件。babel-preset-stage-x,以及babel-preset-react

2.webpack，进行tree-shaking标注,并生成最后的bundle.js

3.uglifyjs，进行代码删除和压缩。

4.babel对最后的进行过优化处理后的**标准**js代码，进行兼容性处理，兼容低版本浏览器。这是需要babe-preset-env
