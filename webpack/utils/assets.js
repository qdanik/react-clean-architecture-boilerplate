import {OUTPUT_FONTS, OUTPUT_IMAGES, OUTPUT_SOUNDS} from '../config';

export default {
  module: {
    rules: [
      {
        oneOf: [
          {
            resourceQuery: /external/,
            use: [{
              loader: 'file-loader',
              options: {
                limit: 10000,
                name: OUTPUT_IMAGES
              }
            }],
          },
          {
            resourceQuery: /inline/,
            use: [
              {loader: 'babel-loader'},
              {
                loader: 'react-svg-loader',
                options: {
                  jsx: true,
                  svgo: {
                    plugins: [
                      {removeUselessStrokeAndFill: false, removeViewBox: false},
                    ]
                  }
                }
              }
            ]
          }
        ],
        test: /\.svg$/
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: OUTPUT_FONTS
          }
        }],
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {name: OUTPUT_IMAGES}
        }],
      },
      {
        test: /\.(mp3)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {name: OUTPUT_SOUNDS}
        }],
      },
    ],
  }
};
