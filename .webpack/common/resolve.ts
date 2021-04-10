import { resolve } from 'path';
import { APP_FOLDER, ASSETS_FOLDER, FILE_EXTENSIONS } from '../constants';

export default () => ({
  extensions: FILE_EXTENSIONS,
  modules: ['node_modules', resolve(APP_FOLDER)],
  alias: {
    assets: resolve(ASSETS_FOLDER),
  }
})