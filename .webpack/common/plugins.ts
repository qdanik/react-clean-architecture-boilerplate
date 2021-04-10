import webpack, { Compiler, WebpackPluginFunction, WebpackPluginInstance } from 'webpack';
import WebpackBar from 'webpackbar';
import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import {DEV_TEMPLATE_PATH, OUTPUT_PATH, TEMPLATE_PATH} from '../constants';
import { getEnvConfig } from '../helpers/getEnvConfig';
import { WebpackConfig } from '../types';

type WebpackPlugin = (
  | WebpackPluginFunction
  | WebpackPluginInstance
);

type WebpackPlugins = WebpackPlugin[];

const StartPlugins: WebpackPlugins = [
  new HtmlWebpackPlugin({
    chunksSortMode: 'auto',
    minify: true,
    template: resolve(DEV_TEMPLATE_PATH),
  }) as WebpackPlugin,
  new webpack.HotModuleReplacementPlugin(),
]

const BuildPlugins: WebpackPlugins = [
  new HtmlWebpackPlugin({
    chunks: ['main', 'vendor'],
    filename: resolve(OUTPUT_PATH),
    minify: true,
    template: resolve(TEMPLATE_PATH),
  }) as WebpackPlugin,
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['js/*.*', 'assets/**/*.*'],
  }),
]

export default (config: WebpackConfig): WebpackPlugins => {
  const envPlugins: WebpackPlugins = config.WEBPACK_SERVE ? StartPlugins : BuildPlugins;

  return [
    ...envPlugins,
    new webpack.DefinePlugin({
      DEVELOPMENT: config.WEBPACK_SERVE || config.isDev,
      ENV_CONFIG: JSON.stringify(getEnvConfig(config)),
    }),
    new WebpackBar({}),
  ]
}