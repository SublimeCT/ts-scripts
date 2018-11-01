import { Argv } from "yargs"

/**
 * 命令行脚本接口
 *
 * @abstract
 * @class Script
 */
abstract class BaseScript {
    public abstract exec (argv: Argv): any
}

interface Script {
    readonly CMD: string[]
    readonly DESCRIBE: string,
    Script: BaseScript
}

/**
 * 脚本列表
 *
 * @interface ScriptList
 */
interface ScriptList {
    [name: string]: Script
}

export {
    BaseScript,
    Script,
    ScriptList
}