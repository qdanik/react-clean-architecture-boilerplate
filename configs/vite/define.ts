import pkg from '../../package.json';

const ENV_CONFIG = {
  TOKEN: '<token>',
};

const DEFAULT_DEFINE = {
  ENV_CONFIG,
  UI_VERSION: JSON.stringify(pkg.version)
};

export const DevDefine = {
  ...DEFAULT_DEFINE,
  DEV: true,
};

export const BuildDefine = {
  ...DEFAULT_DEFINE,
  DEV: false,
};
