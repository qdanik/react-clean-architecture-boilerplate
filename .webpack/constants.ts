export const DEV_HOST = '0.0.0.0';
export const DEV_PORT = '3000';

export const PROXY_STATUS = true;
export const PROXY_REWRITE = {};

export const APP_FOLDER = './src';
export const ASSETS_FOLDER = './assets';
export const APP_INIT_FILE = `${APP_FOLDER}/index.tsx`;

export const TYPESCRIPT_CONFIG = require('../tsconfig.prod.json');

export const OUTPUT_FOLDER = './dist/';
export const OUTPUT_PATH = './dist/index.html';
export const TEMPLATE_PATH = './templates/index.html';

export const DEV_TEMPLATE_PATH = './templates/index.html';

export const OUTPUT_FILENAME = 'js/[name].[fullhash:6].js';
export const FILE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'];

export const OUTPUT_IMAGES = 'assets/images/[fullhash:6].[ext]';
export const OUTPUT_SOUNDS = 'assets/sounds/[fullhash].[ext]';
export const OUTPUT_FONTS = 'assets/fonts/[name].[ext]';
