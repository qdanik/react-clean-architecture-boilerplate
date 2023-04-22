import DotEnv from 'dotenv';

import { ViteEnvConfig, ViteMode, VitePlatform } from './config.types';

export const getEnvConfig = (mode: ViteMode, platform: VitePlatform): ViteEnvConfig => {
  const envFile = mode === 'preview' ? 'dev' : mode;
  const fileName = `${platform ? `.${platform}` : ''}.${envFile}.env`;
  const path = `./setup/env/${fileName}`;
  const result = DotEnv.config({ debug: true, override: false, path });

  if (result.error) {
    throw result.error;
  }

  const config: ViteEnvConfig = {
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    BACKEND_PROXIES: process.env.BACKEND_PROXIES,
    BACKEND_URL: process.env.BACKEND_URL,
    DEV_SERVER_HOST: process.env.DEV_SERVER_HOST,
    DEV_SERVER_PORT: process.env.DEV_SERVER_PORT,
    IS_DEV: false,
  };

  // eslint-disable-next-line no-console
  console.log('[ENV_CONFIG]', config);

  return config;
};
