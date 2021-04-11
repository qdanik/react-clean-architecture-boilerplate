export type EnvConfig = {
  DOMAIN: string,
  PROXIES: Array<string>,
  TOKEN: string,
}

export enum EnvType {
  dev = 'dev',
  stage = 'stage',
  prod = 'prod',
}

export enum ConfigType {
  start = 'start',
  build = 'build',
}

export type WebpackConfig = {
  WEBPACK_SERVE?: boolean;
  env?: EnvType;
  url?: string;
  isDev?: boolean;
  envConfig?: EnvConfig;
}

export type ConfigBuilder = (config: WebpackConfig) => any;