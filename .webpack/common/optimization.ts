import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

const TerserPluginOptions = {
  extractComments: false,
  parallel: true,
  terserOptions: {
    compress: {
      arguments: true,
      drop_console: true,
      drop_debugger: true,
      unsafe: true
    },
    ie8: false,
    output: {
      comments: false,
      quote_style: 1,
    },
    parse: {
      html5_comments: false,
      shebang: false
    },
    safari10: false,
  },
}

export default () => {
  const config: webpack.Configuration = {
    optimization: {
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
      minimize: true,
      minimizer: [
        new TerserPlugin(TerserPluginOptions),
      ],
    }
  }

  return config.optimization;
}