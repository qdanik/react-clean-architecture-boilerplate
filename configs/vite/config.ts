import { defineConfig } from 'vite';
import build from './build';
import defineOptions from './define';
import { BuildPlugins, DevPlugins } from './plugins';
import server from './server';
import styles from './styles';

const defaultConfig = {
  css: styles,
  define: defineOptions,
};

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  switch (command) {
    case 'build':
      return defineConfig({
        ...defaultConfig,
        build,
        plugins: BuildPlugins,
      });
    default:
      return defineConfig({
        ...defaultConfig,
        plugins: DevPlugins,
        server,
      });
  }
};
