import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {DEV_TEMPLATE_PATH} from '../constants';

export default {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{loader: 'html-loader'}],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      minify: true,
      template: resolve(DEV_TEMPLATE_PATH),
    }),
  ],
};
