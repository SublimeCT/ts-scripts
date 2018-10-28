import path from 'path'

namespace Env {
    export const NAME: string = 'sven'
    export const ROOT_NAME: string = path.resolve(__dirname, '../../')
    export const SCRIPTS_DIR: string = path.join(ROOT_NAME, 'scripts')
    export const BUILD_DIR: string = path.join(ROOT_NAME, 'lib')
}

export default Env