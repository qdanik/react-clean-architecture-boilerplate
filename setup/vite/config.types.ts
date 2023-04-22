export type ViteMode = 'prod' | 'stage' | 'dev' | 'preview';
export type VitePlatform = 'mobile' | 'web';

export type ViteEnvConfig = {
  IS_DEV: boolean;
  AUTH_TOKEN: string;
  DEV_SERVER_HOST: string;
  DEV_SERVER_PORT: string;
  BACKEND_URL: string;
  BACKEND_PROXIES: string;
};
