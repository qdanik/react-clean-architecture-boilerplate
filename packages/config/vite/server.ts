import { ServerOptions } from 'vite';

import { ViteEnvConfig } from './config.types';

export const getServerConfig = (env: ViteEnvConfig): ServerOptions => ({
  host: env.DEV_SERVER_HOST,
  open: true,
  port: Number(env.DEV_SERVER_PORT),
  proxy: (env.BACKEND_PROXIES.split(',') || []).reduce(
    (acc, url) => ({
      ...acc,
      [url]: {
        changeOrigin: true,
        rewrite: (path: string): string => path,
        secure: true,
        target: env.BACKEND_URL,
      },
    }),
    {},
  ),
});
