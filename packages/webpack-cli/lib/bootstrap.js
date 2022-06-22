const WebpackCli = require('./webpack-cli')

function runCLI(args) {
  const cli = new WebpackCli();
  cli.run(args)
}

module.exports = {
  runCLI
}
