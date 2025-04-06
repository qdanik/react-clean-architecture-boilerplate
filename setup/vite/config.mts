import { defineConfig, UserConfig } from 'vite';

import { getBuildConfig } from './build.mjs';
import { ViteMode, VitePlatform } from './config.types.mjs';
import { getBuildDefines, getDevDefines } from './define.mjs';
import { getEnvConfig } from './env.mjs';
import { getBuildPlugins, getDevPlugins, getPreviewPlugins } from './plugins.mjs';
import { getServerConfig } from './server.mjs';
import styles from './styles.mjs';

const defaultConfig: UserConfig = {
  css: styles,
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode = 'dev' }) => {
  const envPlatform = (process?.env?.platform || '') as VitePlatform;

  const platform = envPlatform || 'web';
  const envConfig = getEnvConfig(mode as ViteMode, envPlatform);

  if (command === 'build') {
    envConfig.IS_DEV = false;

    return {
      ...defaultConfig,
      build: getBuildConfig(platform),
      define: getBuildDefines(envConfig, platform),
      mode: 'production',
      plugins: getBuildPlugins(envConfig, platform),
    };
  }

  if (mode === 'preview') {
    envConfig.IS_DEV = true;

    return {
      base: './',
      build: getBuildConfig(platform),
      plugins: getPreviewPlugins(envConfig, platform),
      preview: getServerConfig(envConfig),
    };
  }
  envConfig.IS_DEV = true;

  return {
    ...defaultConfig,
    define: getDevDefines(envConfig, platform),
    mode: 'development',
    plugins: getDevPlugins(envConfig, platform),
    server: getServerConfig(envConfig),
  };
});
