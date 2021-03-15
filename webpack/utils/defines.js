import webpack from 'webpack';
import WebpackBar from 'webpackbar';
import {ENV} from '../config';

export default (DEVELOPMENT) => ({
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT,
      ENV_CONFIG: JSON.stringify(ENV),
      SERVER: false,
    }),
    new WebpackBar(),
  ],
});
