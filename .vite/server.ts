import { ServerOptions } from 'vite';

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 3000;
const SERVER_URL = 'https://nexe.dev.xplorie.com/';
const SERVER_PROXIES = [
  '/nexe-core',
  '/nexe-guest',
  '/oauth/token',
  '/pie-account',
  '/pie-facade',
  '/pie-product',
];
const proxy = SERVER_PROXIES.reduce((acc, url) => ({
  ...acc,
  [url]: {
    changeOrigin: true,
    rewrite: (path: string): string => path,
    secure: true,
    target: SERVER_URL,
  }
}), {});

const serverConfig: ServerOptions = {
  host: SERVER_HOST,
  open: true,
  port: SERVER_PORT,
  proxy,
};

export default serverConfig;
