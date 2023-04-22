import react from '@vitejs/plugin-react-swc';
import { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import mkcert from 'vite-plugin-mkcert';
import tsconfigPaths from 'vite-tsconfig-paths';

import reactSvgPlugin from './plugins/react-svg';
import { ViteEnvConfig, VitePlatform } from './config.types';

const getBasePlugins = (env: ViteEnvConfig, platform: VitePlatform): PluginOption[] => [
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
          name: 'removeAttrs',
          params: {
            attrs: '',
          },
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

export const getDevPlugins = (env: ViteEnvConfig, platform: VitePlatform): PluginOption[] => [
  ...getBasePlugins(env, platform),
  react({ tsDecorators: true }),
  mkcert(),
];

export const getPreviewPlugins = (env: ViteEnvConfig, platform: VitePlatform): PluginOption[] => [
  ...getBasePlugins(env, platform),
  mkcert(),
];

export const getBuildPlugins = (env: ViteEnvConfig, platform: VitePlatform): PluginOption[] => [
  ...getBasePlugins(env, platform),
  viteCompression({
    filter: (file: string): boolean => file.includes('.js'),
  }),
];
