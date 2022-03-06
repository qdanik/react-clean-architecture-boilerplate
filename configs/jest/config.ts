import type { Config } from '@jest/types';
import {BuildDefine} from '../vite/define';

type JestConfig = Partial<
  Omit<Config.ProjectConfig, 'moduleNameMapper' | 'transform'> & Config.GlobalConfig
> & {
  preset: string;
  moduleNameMapper: Record<string, string>;
  transform: Record<string, string>;
};

process.env.TZ = 'UTC'

const config: JestConfig = {
  collectCoverageFrom: ['<rootDir>/src/{domain,data,presentation,core}/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/configs',
    '<rootDir>/assets',
    '<rootDir>/src/presentation/web/index.tsx',
    '<rootDir>/src/presentation/web/app.component.tsx',
    '.d.ts',
    '.mock.ts',
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
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
    window: {
      document: {
        cookie: ''
      }
    },
    ...BuildDefine,
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/node_modules/@types', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/__mock__/fileTransformer.js',
  },
  preset: 'ts-jest',
  rootDir: '../../',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/configs/jest/setup.ts'],
  testRegex: ['.test.ts$', '.spec.ts$'],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
};

export default config;
