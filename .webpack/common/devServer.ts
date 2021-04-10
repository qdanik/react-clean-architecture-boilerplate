import { resolve } from 'path';
import { DEV_HOST, DEV_PORT, OUTPUT_FOLDER, PROXY_REWRITE, PROXY_STATUS } from '../constants';
import { WebpackConfig } from '../types';

const DEFAULT_SERVER = {
  historyApiFallback: true,
  host: DEV_HOST,
  hot: true,
  liveReload: true,
  https: false,
  port: DEV_PORT,
  contentBase: resolve(OUTPUT_FOLDER),
};

function parseProxies(proxies = '') {
  return proxies.split(',').map((elem) => elem.trim())
}

function getProxyConfig(config) {
  const {envConfig} = config;
  const CONTEXT = parseProxies(envConfig.PROXIES);
  const TARGET = config.url || envConfig.DOMAIN;

  return {
    CONTEXT,
    TARGET,
  };
}

export function getProxy(config) {
  const proxyConfig = getProxyConfig(config);

  if (PROXY_STATUS) {
    return [
      {
        changeOrigin: true,
        context: proxyConfig.CONTEXT,
        pathRewrite: PROXY_REWRITE,
        secure: true,
        target: proxyConfig.TARGET,
      },
    ];
  }

  return DEFAULT_SERVER;
}


export default (config: WebpackConfig) => {
  return DEFAULT_SERVER
}