import { resolve } from 'path'
import dotenv from 'dotenv'
import { getEnvPath } from './getEnvPath'
import { EnvConfig, WebpackConfig } from '../types'

type DotenvResult = {
  parsed: EnvConfig,
  error: Error
}

export function getEnvConfig(config: WebpackConfig): EnvConfig {
  const envConfigPath = getEnvPath(config)
  const path = resolve(process.cwd(), envConfigPath)
  const result: DotenvResult = (dotenv.config({ path }) as unknown) as DotenvResult

  if (result.error) {
    throw new Error(`Env config doesn't found at ${path}!`)
  }

  return result.parsed
}
