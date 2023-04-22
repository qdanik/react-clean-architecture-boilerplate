import { ViteEnvConfig, VitePlatform } from './config.types';

const getDefaultDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  APP_PLATFORM: JSON.stringify(platform),
  AUTH_TOKEN: JSON.stringify(env.AUTH_TOKEN),
  BACKEND_URL: JSON.stringify(env.BACKEND_URL),
  IS_DEV: JSON.stringify(process.env.NODE_ENV === 'development'),
  UI_VERSION: JSON.stringify(process.env.npm_package_version),
});

export const getDevDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  ...getDefaultDefines(env, platform),
});

export const getBuildDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  ...getDefaultDefines(env, platform),
});
