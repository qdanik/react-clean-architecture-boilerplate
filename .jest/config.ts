import type { Config } from '@jest/types';
import globalOptions from '../.vite/define';

type JestConfig = Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> & Config.GlobalConfig
> & {
  preset: string;
  moduleNameMapper: Record<string, string>;
  transform: Record<string, string>;
};

const config: JestConfig = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    '<rootDir>/src/{domain,data-access,core}/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/ui/app.component.ts',
    '.d.ts',
    '.mock.ts',
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
      tsconfig: '<rootDir>/tsconfig.json',
    },
    ...globalOptions,
  },
  testRegex: ['.test.ts$', '.spec.ts$'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/node_modules/@types', '<rootDir>/src'],
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  rootDir: '../',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    'file-loader?.*': 'GlobalImageStub',
  },
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
};

export default config;
