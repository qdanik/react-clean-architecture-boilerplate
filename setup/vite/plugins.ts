import react from '@vitejs/plugin-react-swc';
import { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';

import reactSvgPlugin from './plugins/react-svg';
import { VitePlatform } from './config.types';

const getBasePlugins = (platform: VitePlatform): PluginOption[] => [
  tsconfigPaths(),
  reactSvgPlugin({
    defaultExport: 'component',
    expandProps: 'end',
    memo: true,
    ref: true,
    replaceAttrValues: null,
    svgProps: null,
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
  createHtmlPlugin({
    inject: {
      data: {
        injectScript: `<script type="module" src="/src/presentation/${platform}/index.tsx"></script>`,
        title: platform.toUpperCase(),
      },
    },
    minify: false,
  }),
];

export const getDevPlugins = (platform: VitePlatform): PluginOption[] => [
  ...getBasePlugins(platform),
  react(),
];

export const getBuildPlugins = (platform: VitePlatform): PluginOption[] => [
  ...getBasePlugins(platform),
  viteCompression({
    filter: (file: string): boolean => file.includes('.js'),
  }),
];
