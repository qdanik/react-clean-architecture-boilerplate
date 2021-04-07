export function getEnvPath(config) {
  const { env = 'dev' } = config;
  switch (env) {
    case 'dev':
      return '.env';
    default:
      return `.env.${env}`;
  }
}
