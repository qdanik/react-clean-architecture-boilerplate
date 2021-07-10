import reactRefresh from '@vitejs/plugin-react-refresh';
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import';
import viteCompression from 'vite-plugin-compression';
import reactSvgPlugin from 'vite-plugin-react-svg';
import tsconfigPaths from 'vite-tsconfig-paths';

const BasePlugins = [
  importToCDN({
    modules: [autoComplete('react'), autoComplete('react-dom')],
  }),
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

export const DevPlugins = [...BasePlugins, reactRefresh()];

export const BuildPlugins = [
  ...BasePlugins,
  viteCompression({
    filter: (file: string): boolean => file.includes('.js'),
  }),
];
