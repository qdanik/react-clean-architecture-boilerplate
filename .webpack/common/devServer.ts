import { resolve } from 'path'
import { DEV_HOST, DEV_PORT, OUTPUT_FOLDER, PROXY_REWRITE, PROXY_STATUS } from '../constants'
import { WebpackConfig } from '../types'

type ProxyConfig = {
  CONTEXT: Array<string>,
  TARGET: string
}

const DEFAULT_SERVER = {
  contentBase: resolve(OUTPUT_FOLDER),
  disableHostCheck: true,
  historyApiFallback: true,
  host: DEV_HOST,
  hot: true,
  https: false,
  liveReload: true,
  port: DEV_PORT,
}

function parseProxies(proxies = ''): Array<string> {
  return proxies.split(',').map(elem => elem.trim())
}

function getProxyConfig(config: WebpackConfig): ProxyConfig {
  const { envConfig } = config
  const CONTEXT = parseProxies(envConfig.PROXIES)
  const TARGET = config.url || envConfig.DOMAIN

  return {
    CONTEXT,
    TARGET,
  }
}

export function getProxy(config: WebpackConfig) {
  const proxyConfig = getProxyConfig(config)

  if (PROXY_STATUS) {
    return [
      {
        changeOrigin: true,
        context: proxyConfig.CONTEXT,
        pathRewrite: PROXY_REWRITE,
        secure: true,
        target: proxyConfig.TARGET,
      },
    ]
  }

  return []
}

export default (config: WebpackConfig) => {
  const proxy = getProxy(config)

  return {
    ...DEFAULT_SERVER,
    proxy,
  }
}
