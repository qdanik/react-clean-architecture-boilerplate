import build from './config/build';
import start from './config/start';
import { getEnvConfig } from './helpers/getEnvConfig';
import { ConfigBuilder, WebpackConfig } from './types';

function getConfigMode() {
  return process.env.npm_lifecycle_event || 'start'
}

function getConfigBuilder(mode: string): ConfigBuilder {
  switch (mode) {
    case 'build':
      return build;
    case 'start':
    default:
      return start;
  }
}

export default (config: WebpackConfig) => {
  const mode = getConfigMode();
  const builder = getConfigBuilder(mode);

  config.envConfig = getEnvConfig(config);

  return builder(config);
};
