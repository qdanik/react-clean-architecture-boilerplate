import folderDelete from 'rollup-plugin-delete';
import { BuildOptions } from 'vite';

import { VitePlatform } from './config.types';

export const getBuildConfig = (platform: VitePlatform): BuildOptions => {
  const outputDir = `dist/${platform}`;

  return {
    chunkSizeWarningLimit: 1000,
    emptyOutDir: false,
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

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        dir: outputDir,
        entryFileNames: 'assets/js/[name]-[hash].js',
        manualChunks: (id: string | string[]): string | void => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          if (id.includes(platform)) {
            return platform;
          }
        },
      },
      plugins: [folderDelete({ hook: 'buildStart', runOnce: true, targets: outputDir })],
    },
  };
};
