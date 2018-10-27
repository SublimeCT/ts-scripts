import { BaseScript } from '../src/BaseScript'
import { Argv } from 'yargs'

class Test extends BaseScript {
    public readonly DESCRIBE: string = 'This is test command'
    constructor () {
        super()
    }
    /**
     * exec
     */
    public exec(argv: Argv) {
        console.log('argv => ', argv.argv)
    }
}

export default Test
