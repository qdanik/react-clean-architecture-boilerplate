import { defaults as defaultConfig } from 'jest-config';
import type { Config } from '@jest/types';

type JestConfig = Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> & Config.GlobalConfig
> & {
  preset?: string;
  moduleNameMapper: Record<string, string | Array<string>>;
  transform: Record<string, string>;
};

const config: JestConfig = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
  testEnvironment: 'node',
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
    DEVELOPMENT: false,
    ENV_CONFIG: {
      TOKEN: 'mockToken',
    },
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/node_modules/@types'],
  moduleFileExtensions: defaultConfig.moduleFileExtensions,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  rootDir: '../',
  moduleNameMapper: {
    'file-loader?.*': 'GlobalImageStub',
    '@app/(.*)$': '<rootDir>/src/$1',
    '@assets/(.*)$': '<rootDir>/assets/$1',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  transform: {
    '^.+\\.(tsx|ts)?$': 'esbuild-jest',
  },
};

export default config;
