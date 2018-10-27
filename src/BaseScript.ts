/**
 * 命令行脚本接口
 */
abstract class Script {
    static readonly DESCRIBE: string
}

/**
 * 命令行脚本基类
 */
class BaseScript extends Script {
    public readonly DESCRIBE: string = 'This is test command'
    constructor () {
        super()
    }
}

export {
    BaseScript,
    Script
}