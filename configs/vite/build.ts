import { BuildOptions } from 'vite';
import { VitePlatform } from './typings';

export const getBuildConfig = (platform: VitePlatform): BuildOptions => ({
  chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      dir: `dist-${platform}`,
      manualChunks: (id: string | string[]): string | void => {
        if (id.includes('node_modules')) {
          return 'vendor';
        }
        if (id.includes('common')) {
          return 'common';
        }
        if (id.includes(platform)) {
          return platform;
        }
      },
      assetFileNames: (assetInfo) => {
        let extType = assetInfo?.name?.split('.').at(1);
        
        if(!extType) {
          extType = 'files';
        }

        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
          extType = 'images';
        }

        return `assets/${extType}/[name]-[hash][extname]`;
      },
      chunkFileNames: 'assets/js/[name]-[hash].js',
      entryFileNames: 'assets/js/[name]-[hash].js',
    },
  },
});
