import folderDelete from 'rollup-plugin-delete';
import { BuildOptions } from 'vite';

import { VitePlatform } from './config.types';

const getAssetsPath = (type: string, extname: string): string =>
  `assets/${type}/[name]-[hash]${extname}`;

const assetFileNames = (assetInfo: { name: string }): string => {
  let extType = assetInfo?.name?.split('.').at(1);

  if (!extType) {
    extType = 'files';
  }

  if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
    extType = 'images';
  }

  return getAssetsPath(extType, '[extname]');
};

const manualChunks = (id: string | string[]): string | void => {
  if (id.includes('node_modules')) {
    return 'vendor';
  }

  if (id.includes('web')) {
    return 'web';
  }
};

export const getBuildConfig = (platform: VitePlatform): BuildOptions => {
  const outputDir = `dist/${platform}`;

  return {
    chunkSizeWarningLimit: 1000,
    emptyOutDir: false,
    minify: true,
    outDir: outputDir,
    rollupOptions: {
      output: {
        assetFileNames,
        chunkFileNames: getAssetsPath('js', '.js'),
        entryFileNames: getAssetsPath('js', '.js'),
        manualChunks,
      },
      plugins: [folderDelete({ hook: 'buildStart', runOnce: true, targets: outputDir })],
    },
  };
};
