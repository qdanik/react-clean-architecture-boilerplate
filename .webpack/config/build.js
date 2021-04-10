import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import assets from '../utils/assets';
import defines from '../utils/defines';
import html from '../utils/prodHtml';
import resolve from '../utils/resolve';
import uglify from '../utils/uglify';

export default (config) =>
  merge(
    {
      mode: 'production',
      plugins: [
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: ['js/*.*', 'assets/**/*.*'],
        }),
      ],
    },
    assets,
    resolve,
    uglify,
    html,
    defines(config)
  );
