import pkg from '../package.json';

const ENV_CONFIG = {
  PIE_URL: 'https://pie.xplorie.com',
  TOKEN: 'Zm9vOmZvb3NlY3JldA==',
  XEVA_PORTAL_URL: 'https://xeva.xplorie.com',
};

const defineOptions = {
  UI_VERSION: JSON.stringify(pkg.version),
  ENV_CONFIG,
};

export default defineOptions;
