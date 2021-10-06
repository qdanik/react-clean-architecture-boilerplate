import { defineConfig } from 'vite';
import build from './build';
import {BuildDefine, DevDefine } from './define';
import { BuildPlugins, DevPlugins } from './plugins';
import server from './server';
import styles from './styles';

const defaultConfig = {
  css: styles,
};

// https://vitejs.dev/config/
export default ({ command }) => {
  switch (command) {
    case 'build':
      return defineConfig({
        ...defaultConfig,
        build,
        define: BuildDefine,
        plugins: BuildPlugins,
      });
    default:
      return defineConfig({
        ...defaultConfig,
        server,
        define: DevDefine,
        plugins: DevPlugins,
      });
  }
};
