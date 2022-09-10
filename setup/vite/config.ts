import DotEnv from 'dotenv';
import { defineConfig, UserConfig } from 'vite';

import { getBuildConfig } from './build';
import { ViteEnvConfig, ViteMode, VitePlatform } from './config.types';
import { getBuildDefines, getDevDefines } from './define';
import { getBuildPlugins, getDevPlugins } from './plugins';
import { getServerConfig } from './server';
import styles from './styles';

const defaultConfig: UserConfig = {
  css: styles,
};

const getEnvConfig = (mode: ViteMode, platform: VitePlatform): ViteEnvConfig => {
  const fileName = `${platform ? `.${platform}` : ''}.${mode}.env`;
  const path = `./setup/env/${fileName}`;
  const result = DotEnv.config({ debug: mode === 'dev', path });

  if (result.error) {
    throw result.error;
  }

  return result.parsed as ViteEnvConfig;
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode = 'dev' }) => {
  const envPlatform = (process?.env?.platform || '') as VitePlatform;

  const platform = envPlatform || 'web';
  const envConfig = getEnvConfig(mode as ViteMode, envPlatform);

  if (command === 'build') {
    return {
      ...defaultConfig,
      build: getBuildConfig(platform),
      define: getBuildDefines(envConfig, platform),
      mode: 'production',
      plugins: getBuildPlugins(platform),
    };
  }

  return {
    ...defaultConfig,
    define: getDevDefines(envConfig, platform),
    mode: 'development',
    plugins: getDevPlugins(platform),
    server: getServerConfig(envConfig),
  };
});
