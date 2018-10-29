import { Script } from '../../src/BaseScript'
import { Argv } from 'yargs'

/**
 * 测试命令
 *
 * @class Test
 * @extends {Script}
 */
class Test extends Script {
    public static readonly DESCRIBE: string = 'This is test command'
    public static readonly CMD: string[] = ['test']
    constructor () {
        super()
    }
    /**
     * say this Script Info
     *
     * @param {Argv} argv
     * @memberof Test
     */
    public exec(argv: Argv) {
        console.log('argv => ', argv.argv)
    }
}

export default Test
