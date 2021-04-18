import { defaults as defaultConfig } from 'jest-config';
import type { Config } from '@jest/types';

type JestConfig = Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> & Config.GlobalConfig
> & {
  preset: string;
  moduleNameMapper: Record<string, string | Array<string>>;
  transform: Record<string, string>;
};

const config: JestConfig = {
  preset: 'ts-jest',
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
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
    DEVELOPMENT: false,
    ENV_CONFIG: {
      TOKEN: 'mockToken',
    },
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/node_modules/@types', '<rootDir>/src'],
  moduleFileExtensions: defaultConfig.moduleFileExtensions,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  rootDir: '../',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    'file-loader?.*': 'GlobalImageStub',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
};

export default config;
