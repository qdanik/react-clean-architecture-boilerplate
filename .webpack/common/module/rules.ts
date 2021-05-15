import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { OUTPUT_FONTS, OUTPUT_IMAGES, OUTPUT_SOUNDS, TYPESCRIPT_CONFIG } from '../../constants';

const EsbuildLoader = (loader: string = 'tsx'): RuleSetRule => ({
  loader: 'esbuild-loader',
  options: {
    loader,
    tsconfigRaw: TYPESCRIPT_CONFIG,
  },
});

const FileLoader = (output: string, limit: number | false = 10000): RuleSetRule => ({
  loader: 'file-loader',
  options: {
    limit,
    name: output,
  },
});

export default (): RuleSetRule[] => [
  {
    test: /\.html$/,
    use: [{ loader: 'html-loader' }],
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    exclude: /node_modules/,
    test: /\.(ts|tsx)?$/,
    use: [EsbuildLoader()],
  },
  {
    exclude: /(node_modules)/,
    test: /\.(js|jsx)?$/,
    use: [EsbuildLoader('jsx')],
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      EsbuildLoader(),
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
    ],
  },
  {
    test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
    use: [FileLoader(OUTPUT_FONTS)],
  },
  {
    test: /\.(png|gif|jpg|jpeg|webp)(\?v=\d+\.\d+\.\d+)?$/,
    use: [FileLoader(OUTPUT_IMAGES)],
  },
  {
    test: /\.(mp3)(\?v=\d+\.\d+\.\d+)?$/,
    use: [FileLoader(OUTPUT_SOUNDS, false)],
  },
];
