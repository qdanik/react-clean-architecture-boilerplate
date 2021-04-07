import {defaults as defaultConfig} from 'jest-config';
import type { Config } from '@jest/types';

type JestConfig = 
Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> &
  Config.GlobalConfig
> & {
  moduleNameMapper: Record<string, string>,
  transform: Record<string, string>,
}

const config: JestConfig  = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  globals: {
    DEVELOPMENT: false,
    ENV_CONFIG: {
      TOKEN: 'mockToken',
    },
  },
  moduleDirectories: ['node_modules', 'node_modules/@types'],
  moduleFileExtensions: defaultConfig.moduleFileExtensions,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  rootDir: '../',
  moduleNameMapper: {
    'file-loader?.*': 'GlobalImageStub',
  },
  transform: {
    '^.+\\.(tsx|ts)?$': 'babel-jest'
  },
}

export default config;
