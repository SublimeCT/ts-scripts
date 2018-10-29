import { Script } from '../../src/BaseScript'
import { Argv } from 'yargs'
import Day from 'dayjs'

/**
 * 打印日期时间信息
 *
 * @class DateTool
 * @extends {Script}
 */
class DateTool extends Script {
    public static readonly DESCRIBE: string = 'Print some info about date/time.'
    public static readonly CMD: string[] = ['date']
    constructor () {
        super()
    }
    public exec (argv: Argv) {
        const lines: string[] = ['']
        console.log('Date/time: %c', Day().format('YYYY'), 'color: red')
    }
}

export default DateTool
