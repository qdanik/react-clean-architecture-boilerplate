import TerserPlugin from 'terser-webpack-plugin';
import { ESBuildMinifyPlugin } from 'esbuild-loader';
import { Configuration } from 'webpack';
import { MinifyPluginOptions } from 'esbuild-loader/dist/interfaces';

const MinifyConfig: MinifyPluginOptions = {
  minify: true,
  minifyWhitespace: true,
  minifySyntax: true,
  treeShaking: true,
  css: true,
};

export default () => {
  const config: Configuration = {
    optimization: {
      minimize: true,
      minimizer: [new ESBuildMinifyPlugin(MinifyConfig)],
      splitChunks: {
        cacheGroups: {
          common: {
            chunks: 'all',
            enforce: true,
            minChunks: 2,
            name: 'common',
            priority: 20,
            reuseExistingChunk: true,
          },
          default: false,
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            test: /node_modules/,
          },
          vendors: false,
        },
      },
    },
  };

  return config.optimization;
};
