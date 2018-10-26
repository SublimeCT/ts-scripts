import inquirer from 'inquirer'
import yargs from 'yargs'

class Handler {
    // 脚本名称
    public readonly NAME: string = 'sven';
    constructor () {
        console.log(this.NAME)
    }
    public init(): void {
        const argv = yargs.option('f', {
            alias: 'name',
            demand: true,
            default: 'tom',
            describe: 'your name',
            type: 'string'
        }).usage('Usage: hello [options]')
        .example('hello -n tom', 'say hello to Tom')
        .help('h')
        .alias('h', 'help')
        .epilog('copyright 2015')
        .argv
        console.log(argv)
        // this._test()
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
