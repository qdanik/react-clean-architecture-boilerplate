import { getEnvPath } from './getEnvPath';
import { resolve } from 'path';
import dotenv from 'dotenv';

export function getEnvConfig(config) {
  const path = getEnvPath(config);

  return dotenv.config({
    path: resolve(process.cwd(), path),
  }).parsed;
}
