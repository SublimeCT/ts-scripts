import inquirer from 'inquirer'
import yargs, { Argv } from 'yargs'

class Handler {
    // 脚本名称
    public readonly NAME: string = 'sven';
    // yargs 提供的对象
    public argv!: Argv;
    constructor () {
        // console.log(this.NAME)
    }
    public init(): void {
        this._fetchCommand()
        // this._test()
    }
    private _fetchCommand ():void {
        this.argv = yargs
            .usage('Usage: hello [options]')
            .example('hello -n tom', 'say hello to Tom')
            .help('h')
            .alias('h', 'help')
            .epilog('copyright 2018')
        console.log(this.argv.argv)
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
