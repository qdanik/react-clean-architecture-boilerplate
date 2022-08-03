import importToCDN, { autoComplete } from 'vite-plugin-cdn-import';
import viteCompression from 'vite-plugin-compression';
import reactSvgPlugin from './plugins/react-svg';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
import { BuildMode } from './typings';
import { createHtmlPlugin } from 'vite-plugin-html';

const BasePlugins = [
  importToCDN({
    modules: [autoComplete('react'), autoComplete('react-dom')],
  }),
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
      removeViewBox: false,
    },
    titleProp: false,
  }),
];

export const DevPlugins = [
  ...BasePlugins,
  react({
    include: '**/*.tsx',
    exclude: 'node_modules/**',
    babel: {
      plugins: [
        ['babel-plugin-styled-components', {
          displayName: true,
          fileName: false,
        }],
      ],
      parserOpts: {
        plugins: ['decorators-legacy']
      }
    }
  }),
];

export const BuildPlugins = (mode: BuildMode): PluginOption[] => [
  ...BasePlugins,
  viteCompression({
    filter: (file: string): boolean => file.includes('.js'),
  }),
  createHtmlPlugin({
    minify: false,
    inject: {
      data: {
        title: mode.toUpperCase(),
        injectScript: `<script type="module" src="/src/presentation/${mode}/index.tsx"></script>`
      }
    }
  }),
];
