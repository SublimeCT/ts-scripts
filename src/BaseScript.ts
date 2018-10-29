import { Argv } from "yargs"

/**
 * 命令行脚本接口
 *
 * @abstract
 * @class Script
 */
abstract class Script {
    public static readonly DESCRIBE: string
    public static readonly CMD: string[]
    public abstract exec (argv: Argv): any
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
    Script,
    ScriptList
}