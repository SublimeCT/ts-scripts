import { BaseScript } from '../../src/BaseScript'
import { Argv } from 'yargs'
import Day from 'dayjs'
import colors from 'colors'

/**
 * 打印日期时间信息
 *
 * @class DateTool
 * @extends {Script}
 */
class DateTool extends BaseScript {
    public static readonly CMD: string[] = ['date']
    public static readonly DESCRIBE: string = 'Print some info about date/time.'
    constructor () {
        super()
    }
    public exec (argv: Argv) {
        console.log(colors.yellow.bgBlue.dim('Date/time: ' + Day().format('YYYY-MM-DD HH:mm:ss')))
        console.log(colors.blue.bgCyan.italic('week: ' + Day().format('dddd')))
        console.log(colors.green.bgWhite.italic('millisecond: ' + Day().valueOf()))
        console.log(colors.white.bgGreen.italic('second: ' + Day().unix()))
    }
}

export default DateTool
