/**
 * 命令行脚本接口
 */
interface Script {
    readonly DESCRIBE: string
}

/**
 * 命令行脚本基类
 */
class BaseScript {
    constructor () {

    }
}

export {
    BaseScript,
    Script
}