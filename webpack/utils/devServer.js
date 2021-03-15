import webpack from 'webpack';
import {
  DEV_HOST, DEV_PORT, PROXY_CONTEXT, PROXY_REWRITE, PROXY_STATUS, PROXY_TARGET
} from '../config';

let devServer = {
  contentBase: './static',
  historyApiFallback: true,
  host: DEV_HOST,
  hot: true,
  https: false,
  port: DEV_PORT
};

if (PROXY_STATUS) {
  devServer = {
    ...devServer,
    proxy: [{
      changeOrigin: true,
      context: PROXY_CONTEXT,
      pathRewrite: PROXY_REWRITE,
      secure: true,
      target: PROXY_TARGET,
    }],
  };
}

export default {
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
};
