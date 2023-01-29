import { resolve } from 'path';
import folderDelete from 'rollup-plugin-delete';
import { BuildOptions } from 'vite';

import { VitePlatform } from './config.types';

export const getCacheDir = (platform: VitePlatform): string =>
  resolve(__dirname, `../../../node_modules/.cache/vite/${platform}`);

export const getPublicDir = (): string => resolve(__dirname, `../../assets/`);

const PagesRegex = /src\/pages\/(.+)\//gm;

export const getBuildConfig = (platform: VitePlatform): BuildOptions => {
  const outputDir = resolve(__dirname, `../../../dist/${platform}`);
  const getAssetsPath = (type: string, extname: string, hash = '-[hash]'): string =>
    `assets/${type}/[name]${hash}${extname}`;

  return {
    chunkSizeWarningLimit: 1000,
    emptyOutDir: false,
    minify: true,
    outDir: outputDir,
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo?.name?.split('.').at(1);

          if (!extType) {
            extType = 'files';
          }

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }

          return getAssetsPath(extType, '[extname]');
        },
        chunkFileNames: getAssetsPath('js', '.js'),
        entryFileNames: getAssetsPath('js', '.js'),
        manualChunks: (id: string): string | void => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          const page = PagesRegex.exec(id);
          if (page?.[1]) {
            return `page-${page[1]}`;
          }

          if (id.includes(platform)) {
            return platform;
          }
        },
        name: 'app',
      },
      plugins: [
        folderDelete({ force: true, hook: 'buildStart', runOnce: true, targets: outputDir }),
      ],
      treeshake: true,
    },
  };
};
