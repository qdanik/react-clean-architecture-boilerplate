import {OUTPUT_FONTS, OUTPUT_IMAGES, OUTPUT_SOUNDS} from '../../constants';

export default () => [
  {
    test: /\.html$/,
    use: [{loader: 'html-loader'}],
  },
  {
    exclude: /node_modules/,
    test: /\.(ts|tsx)?$/,
    use: 'ts-loader',
  },
  {
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    test: /\.(js|jsx)?$/,
  },
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
];
