import { defineConfig } from 'vite';
import { buildConfig } from './build';
import { BuildDefine, DevDefine } from './define';
import { BuildPlugins, DevPlugins } from './plugins';
import server from './server';
import styles from './styles';
import { BuildMode } from './typings';

const defaultConfig = {
  css: styles,
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode = 'web' }) => {
  const buildMode = mode as BuildMode;
  switch (command) {
    case 'build':
      return {
        ...defaultConfig,
        mode: 'production',
        build: buildConfig(buildMode),
        define: BuildDefine,
        plugins: BuildPlugins(buildMode),
      };
    default:
      return {
        ...defaultConfig,
        server,
        define: DevDefine,
        plugins: DevPlugins,
      };
  }
});
