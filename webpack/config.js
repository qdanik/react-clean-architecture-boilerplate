import dotenv from 'dotenv'

export const DEV_HOST = '127.0.0.1';
export const DEV_PORT = '3000';

export const ENV = dotenv.config().parsed

export const PROXY_STATUS = true; // true for enable proxy
export const PROXY_CONTEXT = (ENV.PROXIES || '').split(',').map(elem => elem.trim());
export const PROXY_TARGET = ENV.DOMAIN;
export const PROXY_REWRITE = { };

export const APP_FOLDER = './src';

export const OUTPUT_FOLDER = './dist/';
export const OUTPUT_PATH = './dist/index.html';
export const TEMPLATE_PATH = './templates/index.html';

export const DEV_TEMPLATE_PATH = './templates/index.html';

export const OUTPUT_FILENAME = 'js/[name].[hash:6].js';
export const FILE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.json'];

export const OUTPUT_IMAGES = 'assets/images/[hash:6].[ext]';
export const OUTPUT_SOUNDS = 'assets/sounds/[hash].[ext]';
export const OUTPUT_FONTS = 'assets/fonts/[name].[ext]';
