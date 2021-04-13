import {defaults as defaultConfig} from 'jest-config';
import type { Config } from '@jest/types';

type JestConfig = 
Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> &
  Config.GlobalConfig
> & {
  preset: string,
  moduleNameMapper: Record<string, string>,
  transform: Record<string, string>,
}

const config: JestConfig  = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx'
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
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
    '^.+\\.(tsx|ts)?$': 'ts-jest'
  },
}

export default config;
