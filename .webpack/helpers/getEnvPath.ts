import { EnvType, WebpackConfig } from '../types'

export function getEnvPath(config: WebpackConfig): string {
  const { env = EnvType.dev } = config
  switch (env) {
    case EnvType.dev:
      return '.env'
    default:
      return `.env.${env}`
  }
}
