import inquirer from 'inquirer'
import yargs, { Argv } from 'yargs'
import Test from '../scripts/test'
import DateTool from '../scripts/date'
import OCR from '../scripts/ocr'
import { BaseScript } from './BaseScript'
import Env from './Env'

class Handler {
    /**
     * 全部命令
     * @private
     * @memberof Handler
     */
    private readonly commands = [ Test, DateTool, OCR ]
    constructor () { }
    public init(): void {
        this._registMain()
        this._registChild()
    }
    /**
     * 主命令参数处理
     */
    private _registMain () {
        // 加入 help 信息
        const _scripts = this.commands.map(cmd => cmd.name)
        yargs.option('l', { describe: 'show script list', type: 'boolean' })
            .usage('Usage: ' + Env.NAME + ' [' + _scripts.join('|') + '] | l')
            .alias('h', 'help')
        // use sven -l to show list
        if (yargs.argv._.length === 0 && Reflect.has(yargs.argv, 'l')) {
            this._showScriptList(yargs.argv)
        }
    }
    /**
     * 注册子命令
     */
    private _registChild () {
        // show commands
        yargs.command(['all', 'list', 'ls'], 'show sctipt list', {}, args => {
            this._showScriptList(args)
        }).argv
        // 注册其他子命令
        this._registerCommand()
    }
    private _showScriptList (argv: yargs.Argv | yargs.Arguments):void {
        for (let name in this.commands) {
            const { CMD, DESCRIBE } = this.commands[name]
            console.log('\t> ' + CMD.join('|') + ' >>> description: ' + DESCRIBE)
        }
    }
    private _registerCommand ():void {
        for (let name in this.commands) {
            const { CMD, DESCRIBE } = this.commands[name]
            yargs.command(CMD, DESCRIBE, {}, args => {
                (new this.commands[name]()).exec(yargs)
                return yargs.argv
            }).argv
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
