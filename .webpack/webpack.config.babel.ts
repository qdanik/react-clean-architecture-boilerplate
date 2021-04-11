import { Configuration } from 'webpack';
import build from './config/build'
import start from './config/start'
import { getEnvConfig } from './helpers/getEnvConfig'
import { ConfigBuilder, WebpackConfig, ConfigType } from './types'

function getConfigType(): ConfigType {
  const argType = process.env.npm_lifecycle_event as ConfigType

  return argType || ConfigType.start
}

function getConfigBuilder(type: ConfigType): ConfigBuilder {
  switch (type) {
    case ConfigType.build:
      return build
    case ConfigType.start:
    default:
      return start
  }
}

export default (config: WebpackConfig): Configuration => {
  const type = getConfigType()
  const builder = getConfigBuilder(type)

  config.envConfig = getEnvConfig(config)

  return builder(config)
}
