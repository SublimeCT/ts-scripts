"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const yargs_1 = __importDefault(require("yargs"));
class Handler {
    constructor() {
        // 脚本名称
        this.NAME = 'sven';
        console.log(this.NAME);
    }
    init() {
        const argv = yargs_1.default.option('f', {
            alias: 'name',
            demand: true,
            default: 'tom',
            describe: 'your name',
            type: 'string'
        }).usage('Usage: hello [options]')
            .example('hello -n tom', 'say hello to Tom')
            .help('h')
            .alias('h', 'help')
            .epilog('copyright 2015')
            .argv;
        console.log(argv);
        // this._test()
    }
    _test() {
        return __awaiter(this, void 0, void 0, function* () {
            const answers = yield inquirer_1.default.prompt([
                {
                    type: 'confirm',
                    name: 'test',
                    message: 'Are you ok ?',
                    default: true
                }
            ]);
            console.log('answers', answers);
        });
    }
}
exports.default = Handler;
