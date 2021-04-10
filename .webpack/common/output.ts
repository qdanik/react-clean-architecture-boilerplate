import { resolve } from 'path';
import { OUTPUT_FILENAME, OUTPUT_FOLDER } from '../constants';

export default () => ({
  chunkFilename: OUTPUT_FILENAME,
  filename: OUTPUT_FILENAME,
  globalObject: 'this',
  path: resolve(OUTPUT_FOLDER),
  pathinfo: true,
  publicPath: '/',
})