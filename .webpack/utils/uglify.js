import TerserPlugin from 'terser-webpack-plugin';

export default {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)?$/,
        use: ['babel-loader'],
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: 6,
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
      }),
    ],
  },
};
