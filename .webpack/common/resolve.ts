import { resolve } from 'path'
import { ResolveOptions } from 'webpack';
import { APP_FOLDER, ASSETS_FOLDER, FILE_EXTENSIONS } from '../constants'

export default (): ResolveOptions => ({
  alias: {
    assets: resolve(ASSETS_FOLDER),
  },
  extensions: FILE_EXTENSIONS,
  modules: ['node_modules', resolve(APP_FOLDER)],
})
