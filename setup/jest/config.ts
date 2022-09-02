import type { Config } from '@jest/types';

type JestConfig = Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> & Config.GlobalConfig
> & {
  preset: string;
  moduleNameMapper: Record<string, string>;
  transform: Record<string, string>;
};

process.env.TZ = 'UTC';

const config: JestConfig = {
  collectCoverageFrom: ['<rootDir>/src/{domain,data,core}/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/setup',
    '<rootDir>/assets',
    '<rootDir>/src/presentation/{mobile,web}/index.tsx',
    '<rootDir>/src/presentation/{mobile,web}/app.component.tsx',
    '.d.ts',
    '.mock.ts',
    'index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  globals: {
    APP_PLATFORM: 'web',
    AUTH_TOKEN: '<token>',
    DEV: false,
    UI_VERSION: '0.0.123',
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/node_modules/@types', '<rootDir>/src'],
  moduleNameMapper: {
    'assets/(.*)': '<rootDir>/assets/$1',
  },
  preset: 'ts-jest',
  rootDir: '../../',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/setup/jest/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup/jest/setup-after-env.ts'],
  testEnvironment: 'jsdom',
  testRegex: ['.test.ts$', '.spec.ts$', '.test.tsx$', '.spec.tsx$'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/setup/jest/plugins/fileTransformer.js',
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
};

export default config;
