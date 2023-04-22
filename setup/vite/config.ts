import { defineConfig, UserConfig } from 'vite';

import { getBuildConfig } from './build';
import { ViteMode, VitePlatform } from './config.types';
import { getBuildDefines, getDevDefines } from './define';
import { getEnvConfig } from './env';
import { getBuildPlugins, getDevPlugins, getPreviewPlugins } from './plugins';
import { getServerConfig } from './server';
import styles from './styles';

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
