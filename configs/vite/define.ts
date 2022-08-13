import pkg from '../../package.json';
import { ViteEnvConfig, VitePlatform } from './typings';


const getDefaultDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  UI_VERSION: JSON.stringify(pkg.version),
  AUTH_TOKEN: JSON.stringify(env.AUTH_TOKEN),
  APP_PLATFORM: JSON.stringify(platform),
});

export const getDevDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  ...getDefaultDefines(env, platform),
  DEV: true,
});

export const getBuildDefines = (env: ViteEnvConfig, platform: VitePlatform) => ({
  ...getDefaultDefines(env, platform),
  DEV: false,
});
