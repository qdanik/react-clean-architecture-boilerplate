import webpack from 'webpack';
import { getDevServer } from '../helpers/getDevServer';


export default (config) => {
  const devServer = getDevServer(config);

  return {
    devServer,
    module: {
      rules: [
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
      ],
      strictExportPresence: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
};
