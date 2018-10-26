import { Questions } from "inquirer";

/**
 * 命令行脚本接口
 */
interface Script {
    describe: Questions<any>
}

/**
 * 命令行脚本基类
 */
class BaseScript {
    constructor () {

    }
}

export {
    BaseScript
}