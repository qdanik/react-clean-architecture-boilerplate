import DotEnv from 'dotenv';
import { resolve } from 'path';

import { ViteEnvConfig, ViteMode, VitePlatform } from './config.types';

export const getEnvConfig = (mode: ViteMode, platform: VitePlatform): ViteEnvConfig => {
  const fileName = `.${mode}.env`;
  const path = resolve(__dirname, '../env/', platform, fileName);

  const result = DotEnv.config({ debug: mode === 'dev', path });

  if (result.error) {
    throw result.error;
  }

  return result.parsed as ViteEnvConfig;
};
