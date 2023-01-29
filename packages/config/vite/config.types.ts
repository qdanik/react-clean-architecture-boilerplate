export type ViteMode = 'prod' | 'stage' | 'dev';
export type VitePlatform = 'mobile' | 'web';

export type ViteEnvConfig = {
  AUTH_TOKEN: string;
  DEV_SERVER_HOST: string;
  DEV_SERVER_PORT: string;
  BACKEND_URL: string;
  BACKEND_PROXIES: string;
};
