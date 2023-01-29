/* eslint-disable import/no-relative-packages */
import { defineConfig } from 'vite';

import {
  getBuildConfig,
  getBuildDefines,
  getBuildPlugins,
  getCacheDir,
  getDevDefines,
  getDevPlugins,
  getEnvConfig,
  getPublicDir,
  getServerConfig,
  styles,
  ViteMode,
} from '../../packages/config/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode = 'dev' }) => {
  const platform = 'web';
  const envConfig = getEnvConfig(mode as ViteMode, platform);
  const cacheDir = getCacheDir(platform);
  const publicDir = getPublicDir();

  if (command === 'build') {
    return {
      build: getBuildConfig(platform),
      cacheDir,
      css: styles,
      define: getBuildDefines(envConfig, platform),
      mode: 'production',
      plugins: getBuildPlugins(),
      publicDir,
    };
  }

  return {
    cacheDir,
    css: styles,
    define: getDevDefines(envConfig, platform),
    mode: 'development',
    plugins: getDevPlugins(),
    publicDir,
    server: getServerConfig(envConfig),
  };
});
