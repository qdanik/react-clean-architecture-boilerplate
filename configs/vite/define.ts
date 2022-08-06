import pkg from '../../package.json';
import { ViteEnvConfig } from './typings';


const getDefaultDefines = (env: ViteEnvConfig) => ({
  UI_VERSION: JSON.stringify(pkg.version),
  AUTH_TOKEN: JSON.stringify(env.AUTH_TOKEN),
});

export const getDevDefines = (env: ViteEnvConfig) => ({
  ...getDefaultDefines(env),
  DEV: true,
});

export const getBuildDefines = (env: ViteEnvConfig) => ({
  ...getDefaultDefines(env),
  DEV: false,
});
