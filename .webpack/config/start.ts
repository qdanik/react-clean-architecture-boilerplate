import { Configuration } from 'webpack';
import {
  entry,
  module,
  optimization,
  output,
  plugins,
  resolve,
  devServer
} from '../common';
import { WebpackConfig } from '../types';

export default (config: WebpackConfig): Configuration => ({
  devtool: 'inline-source-map',
  externals: [{ External: ['window'] }],
  mode: 'development',
  performance: { hints: false },
  entry: entry(),
  module: module(),
  output: output(),
  plugins: plugins(config),
  resolve: resolve(),
  devServer: devServer(config),
}) as Configuration
