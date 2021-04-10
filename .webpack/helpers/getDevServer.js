import { DEV_HOST, DEV_PORT, PROXY_REWRITE, PROXY_STATUS } from '../constants';
import { getEnvConfig } from './getEnvConfig';

const DEFAULT_SERVER = {
  historyApiFallback: true,
  host: DEV_HOST,
  hot: true,
  https: false,
  port: DEV_PORT,
};

function parseProxies(proxies = '') {
  return proxies.split(',').map((elem) => elem.trim())
}

function getProxyConfig(config) {
  const env = getEnvConfig(config);
  const CONTEXT = parseProxies(env.PROXIES);
  const TARGET = config.url || env.DOMAIN;

  return {
    CONTEXT,
    TARGET,
  };
}

export function getDevServer(config) {
  const proxyConfig = getProxyConfig(config);

  if (PROXY_STATUS) {
    return {
      ...DEFAULT_SERVER,
      proxy: [
        {
          changeOrigin: true,
          context: proxyConfig.CONTEXT,
          pathRewrite: PROXY_REWRITE,
          secure: true,
          target: proxyConfig.TARGET,
        },
      ],
    };
  }

  return DEFAULT_SERVER;
}
