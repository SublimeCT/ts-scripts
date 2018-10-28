import inquirer from 'inquirer'
import yargs, { Argv } from 'yargs'
import scripts from '../scripts/index'
import { BaseScript } from './BaseScript'

class Handler {
    constructor (public arg: Argv = yargs) {
        // console.log(this.NAME)
    }
    public init(): void {
        const scpName = this.arg.argv._[0]
        for (let name in scripts) {
            // const script:BaseScript = scripts[name]
            console.log(name)
        }
        // this._fetchCommand()
        // this._test()
    }
    private _fetchCommand ():void {
        // this.argv = yargs
        //     .usage('Usage: hello [options]')
        //     .example('hello -n tom', 'say hello to Tom')
        //     .help('h')
        //     .alias('h', 'help')
        //     .epilog('copyright 2018')
        // console.log(this.argv.argv)
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
