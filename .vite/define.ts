import pkg from '../package.json';

const ENV_CONFIG = {
  DEVELOPMENT: true,
};

const defineOptions = {
  UI_VERSION: JSON.stringify(pkg.version),
  ENV_CONFIG,
};

export default defineOptions;
