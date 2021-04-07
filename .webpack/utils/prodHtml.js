import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {OUTPUT_PATH, TEMPLATE_PATH} from '../constants';

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
      chunks: ['main', 'vendor'],
      filename: resolve(OUTPUT_PATH),
      minify: true,
      template: resolve(TEMPLATE_PATH),
    })
  ],
};
