#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const pkg = require('../package')
const syncToRemote = require('..')

program
  .version(pkg.version)
  .usage('<target>')
  .option('--remote <remote>', 'Repo remote url')
  .option('--branch <branch>', 'Repo branch')
  .on('--help', console.log)
  .parse(process.argv)

const { args, remote, branch } = program
const [ target ] = args

syncToRemote(path.resolve(target || process.cwd()), { remote, branch })
