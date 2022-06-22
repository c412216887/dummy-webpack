#!/usr/bin/env node

console.log('webpack-cli/bin/cli.js')
const { runCLI } = require('../lib/bootstrap.js')

runCLI(process.argv)


