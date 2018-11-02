/**
 * document: https://ai.baidu.com/docs#/OCR-API/top
 * source: https://github.com/Baidu-AIP/nodejs-sdk/blob/master/src/AipOcr.js
 * @author sven
 */
declare module 'baidu-aip-sdk' {
    export interface GeneralBasicOptions {
        language_type?: string,
        detect_direction?: string,
        detect_language?: string,
        probability?: string
    }
    export class ocr {
        constructor (API_ID: string, API_KEY: string, SECRET_KEY: string)
        public generalBasic (params: string, options?: GeneralBasicOptions): Promise<any>
    }
}