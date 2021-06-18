import { defineConfig } from 'vite';
import build from './build';
import css from './css';
import { BuildPlugins, DevPlugins } from './plugins';
import server from './server';
import defineOptions from './define';

const defaultConfig = {
  define: defineOptions,
  css,
}

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
