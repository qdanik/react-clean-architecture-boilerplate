import reactRefresh from '@vitejs/plugin-react-refresh';
import viteCompression from 'vite-plugin-compression';
import reactSvgPlugin from 'vite-plugin-react-svg';
import tsconfigPaths from 'vite-tsconfig-paths';

const BasePlugins = [
  tsconfigPaths(),
  reactSvgPlugin({
    defaultExport: 'component',
    expandProps: 'end',
    memo: false,
    ref: false,
    replaceAttrValues: null,
    svgProps: null,
    svgo: true,
    svgoConfig: {
      plugins: {
        removeViewBox: false,
      },
    },
    titleProp: false,
  }),
];

export const DevPlugins = [reactRefresh(), ...BasePlugins];

export const BuildPlugins = [
  viteCompression({
    filter: (file: string): boolean => file.includes('.js'),
  }),
  ...BasePlugins,
];
