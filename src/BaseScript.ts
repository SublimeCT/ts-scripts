import { Argv } from "yargs";

/**
 * 命令行脚本接口
 *
 * @abstract
 * @class Script
 */
abstract class Script {
    public static readonly DESCRIBE: string
    public abstract exec (argv: Argv): any
}

/**
 * 命令行脚本基类
 * 
 * @class BaseScript
 * @extends {Script}
 */
class BaseScript {
    public readonly DESCRIBE: string = 'This is test command'
}

export {
    BaseScript,
    Script
}