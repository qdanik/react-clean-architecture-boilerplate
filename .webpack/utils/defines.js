import webpack from 'webpack';
import WebpackBar from 'webpackbar';
import { getEnvConfig } from '../helpers/getEnvConfig';

export default (config) => ({
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: config.WEBPACK_SERVE || config.isDev,
      ENV_CONFIG: JSON.stringify(getEnvConfig(config)),
    }),
    new WebpackBar(),
  ],
});
