import yargs from 'yargs'

yargs.command(['all', 'list', 'ls'], 'test command', {}, args => {
    console.log(args)
}).argv

console.log('==========')