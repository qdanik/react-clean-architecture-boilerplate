import {OUTPUT_FONTS, OUTPUT_IMAGES, OUTPUT_SOUNDS} from '../constants';

export default {
  module: {
    rules: [
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['babel-loader', '@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: OUTPUT_FONTS,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: OUTPUT_IMAGES},
          },
        ],
      },
      {
        test: /\.(mp3)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: OUTPUT_SOUNDS},
          },
        ],
      },
    ],
  },
};
