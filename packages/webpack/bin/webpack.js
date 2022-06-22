console.log("webpack/bin/webpack.js")

const cli = {
  name: 'webpack-cli',
  package: 'webpack-cli',
  binName: 'webpack-cli',
}

function runCli(cli) { // 直接做参数传入，减少查询链
  const { resolve, dirname } = require('path')
  // 源码使用require.resolve来获取node_modules中webpack-cli工程中的package.json
  const pkgPath = resolve(resolve(), `packages/${cli.package}/package.json`);
  // 根据package.json来获取到bin文件中的命令，json文件可以直接使用require来获取文件内容，js文件可以执行使用require来执行
  const pkg = require(pkgPath)
  // 运行webpack-cli的bin文件
  require(resolve(
    dirname(pkgPath), // package.json的文件夹的绝对路径
    pkg.bin[cli.binName] // bin文件相对于package.json的相对路径
  ))
}

runCli(cli)
