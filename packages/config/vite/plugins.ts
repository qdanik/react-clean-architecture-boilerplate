import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

import reactSvgPlugin from './plugins/react-svg';

const getBasePlugins = (): PluginOption[] => [
  tsconfigPaths(),
  reactSvgPlugin({
    defaultExport: 'component',
    expandProps: 'end',
    memo: true,
    ref: true,
    replaceAttrValues: undefined,
    svgProps: undefined,
    svgo: true,
    svgoConfig: {
      plugins: [
        {
          active: false,
          name: 'removeViewBox',
        },
      ],
    },
    titleProp: false,
  }),
];

export const getDevPlugins = (): PluginOption[] => [...getBasePlugins(), react()];

export const getBuildPlugins = (): PluginOption[] => [
  ...getBasePlugins(),
  react(),
  viteCompression({
    filter: (file: string): boolean => file.includes('.js'),
  }),
];
