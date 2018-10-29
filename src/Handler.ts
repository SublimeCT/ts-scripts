import inquirer from 'inquirer'
import yargs, { Argv } from 'yargs'
import scripts from '../scripts/index'
import { ScriptList } from './BaseScript'
import Env from './Env'

class Handler {
    private readonly scriptsList:ScriptList = scripts
    constructor (public arg: Argv = yargs) {
        // console.log(this.NAME)
    }
    public init(): void {
        this._fetchDescribe(yargs)
        const argv = yargs.command(['all', 'list', 'ls'], 'show sctipt list', {}, args => {
            this._showScriptList(args)
        })
        .help('h')
        .argv
        this._fetchCommand(yargs)
        // use sven -l to show list
        if (argv._.length === 0 && Reflect.has(argv, 'l')) {
            this._showScriptList(argv)
        }
    }
    private _fetchDescribe (argv: yargs.Argv):void {
        const _scripts = Object.keys(scripts).join('|')
        argv.option('l', {
            describe: 'show script list',
            type: 'boolean'
        }).usage('Usage: ' + Env.NAME + ' [' + _scripts + '] | l')
    }
    private _showScriptList (argv: yargs.Argv | yargs.Arguments):void {
        for (let name in this.scriptsList) {
            console.log('\tname: ' + name + '; description: ' + this.scriptsList[name].DESCRIBE)
        }
    }
    private _fetchCommand (argv: yargs.Argv):void {
        for (let cmd in scripts) {
            // const { CMD, DESCRIBE } = scripts[cmd]
            // argv.command(CMD, DESCRIBE)
        }
    }
    private async _test(): Promise<void> {
        const answers = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'test',
                message: 'Are you ok ?',
                default: true
            }
        ])
        console.log('answers', answers)
    }
}

export default Handler
