export function getEnvPath(config): string {
  const { env = 'dev' } = config;
  switch (env) {
    case 'dev':
      return '.env';
    default:
      return `.env.${env}`;
  }
}
