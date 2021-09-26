import { Env } from './config';

declare global {
  const ENV_CONFIG: Env;
  const UI_VERSION: string;
}
