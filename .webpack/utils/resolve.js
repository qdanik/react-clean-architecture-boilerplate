import { resolve } from 'path';
import {
  APP_FOLDER,
  ASSETS_FOLDER,
  APP_INIT_FILE,
  FILE_EXTENSIONS,
  OUTPUT_FILENAME,
  OUTPUT_FOLDER,
} from '../constants';

export default {
  entry: {
    main: APP_INIT_FILE,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          enforce: true,
          minChunks: 2,
          name: 'common',
          priority: 20,
          reuseExistingChunk: true,
        },
        default: false,
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          test: /node_modules/,
        },
        vendors: false,
      },
    },
  },
  output: {
    chunkFilename: OUTPUT_FILENAME,
    filename: OUTPUT_FILENAME,
    globalObject: 'this',
    path: resolve(OUTPUT_FOLDER),
    pathinfo: true,
    publicPath: '/',
  },
  resolve: {
    extensions: FILE_EXTENSIONS,
    modules: ['node_modules', resolve(APP_FOLDER)],
    alias: {
      assets: resolve(ASSETS_FOLDER),
    }
  },
};
