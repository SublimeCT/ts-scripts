import { BaseScript, Script } from '../src/BaseScript'

class Test extends BaseScript implements Script {
    public readonly DESCRIBE: string = 'This is test command'
    constructor () {
        super()
    }
}

export default Test
