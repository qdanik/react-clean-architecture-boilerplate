import { BuildOptions } from 'vite';

const buildConfig: BuildOptions = {
  brotliSize: false,
  chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      manualChunks: (id: string | string[]): string => {
        if (id.includes('node_modules')) {
          return 'vendor';
        }
      },
    },
  },
};

export default buildConfig;
