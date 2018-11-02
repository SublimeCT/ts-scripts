import { BaseScript } from '../../src/BaseScript'
import yargs, { Argv } from 'yargs'
import path from 'path'
import fs from 'fs'
import colors from 'colors'
import { ocr as OcrClient, GeneralBasicOptions } from 'baidu-aip-sdk'
import { API } from '../../config'

/**
 * 文字识别
 * @class OCR
 * @extends {Script}
 */
class OCR extends BaseScript {
    public static readonly CMD: string[] = ['OCR', 'ocr']
    public static readonly DESCRIBE: string = 'use baidu PCR API to recognition image'
    /**
     * 支持的图片格式
     * @private
     * @type {string[]}
     */
    private readonly EXT_NAMES: string[] = ['.png', '.jpg', '.jpeg', '.bmp']
    private readonly OPTIONS: GeneralBasicOptions = {
        detect_direction: 'true',
        detect_language: 'true',
        probability: 'true'
    }
    constructor () {
        super()
    }
    /**
     * 识别图像内文字
     * @param {Argv} argv
     * @memberof Test
     */
    public async exec(argv: Argv) {
        const imgPath = await this._getPath(argv)
        console.log(colors.yellow('\t[1] input path: ' + imgPath))
        const img = fs.readFileSync(imgPath).toString('base64')
        console.log(colors.blue('\t[2] read image success !'))
        const { API_ID, API_KEY, SECRET_KEY } = API
        const client = new OcrClient(API_ID, API_KEY, SECRET_KEY)
        const result = await client.generalBasic(img, this.OPTIONS)
        console.log(colors.white('\t[3] finished => \n'), result)
    }
    /**
     * 获取输入的图片路径
     *
     * @author sven
     * @private
     * @param {Argv} argv
     * @returns {string} path
     */
    private _getPath (argv: Argv): string {
        const _path = argv.argv._[1]
        if (_path === undefined) throw new Error('1-1 未检测到图片路径')
        const extName = path.extname(_path).toLowerCase()
        if (this.EXT_NAMES.indexOf(extName) === -1) throw new Error('1-2 不支持的图片类型 (必须为' + this.EXT_NAMES.join('|') + ')')
        return _path
    }
}

export default OCR
