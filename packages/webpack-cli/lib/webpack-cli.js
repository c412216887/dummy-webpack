const { program } = require('commander');
const WEBPACK_PACKAGE = process.env.WEBPACK_PACKAGE || 'webpack' // 通过环境变量，更改引入node_modules中的包，还是本地包

class WebpackCli {
  constructor() {
    this.program = program
  }
  tryRequireThenImport(module) {
    const result = require(module)
    return result; // result是webpack函数，此时，还没有执行
  }
  loadWebpack() {
    return this.tryRequireThenImport(WEBPACK_PACKAGE)
  }
  run(args) {
    const loadCommandByName = () => {
      this.webpack = this.loadWebpack()
      this.runWebpack() // 开始执行webpack
    }
    // TODO  源码中会在注册命令中执行loadCommandByName
    // this.program.action((options, program) => {
      // 执行命令
      loadCommandByName()
    // })
  }
  createCompiler() {
    let compiler;
    let config = this.loadConfig(); //config是一个对象，里面包含一个options、path
    compiler = this.webpack();
    if (compiler && compiler.compiler) {
      compiler = compiler.compiler;
    }
    return compiler
  }
  runWebpack() {
    let compiler;
    compiler = this.createCompiler()
  }
}

module.exports = WebpackCli
