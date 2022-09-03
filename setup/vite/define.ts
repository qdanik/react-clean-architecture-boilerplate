import pkg from '../../package.json';
import { ViteEnvConfig, VitePlatform } from './config.types';

const getDefaultDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  APP_PLATFORM: JSON.stringify(platform),
  AUTH_TOKEN: JSON.stringify(env.AUTH_TOKEN),
  UI_VERSION: JSON.stringify(pkg.version),
});

export const getDevDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  ...getDefaultDefines(env, platform),
  DEV: true,
});

export const getBuildDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  ...getDefaultDefines(env, platform),
  DEV: false,
});
