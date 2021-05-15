import { resolve } from 'path';
import { ResolveOptions } from 'webpack';
import { APP_FOLDER, ASSETS_FOLDER, FILE_EXTENSIONS, TYPESCRIPT_CONFIG } from '../constants';

export default (): ResolveOptions => ({
  alias: {
    '@assets': resolve(ASSETS_FOLDER),
    '@app': resolve(APP_FOLDER),
  },
  extensions: FILE_EXTENSIONS,
  modules: ['node_modules'],
});
