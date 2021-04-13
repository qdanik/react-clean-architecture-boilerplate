import { EnvType, WebpackConfig } from '../types'

export function getEnvPath(config: WebpackConfig): string {
  const { env = EnvType.dev } = config
  switch (env) {
    case EnvType.dev:
      return '.env'
    case EnvType.prod:
      return '.env.production'
    case EnvType.stage:
      return '.env.staging'
    default:
      return `.env.${env}`
  }
}
