import pkg from '../../package.json';

const ENV_CONFIG = {
  TOKEN: '<token>',
};

const defineOptions = {
  ENV_CONFIG,
  UI_VERSION: JSON.stringify(pkg.version),
};

export default defineOptions;
