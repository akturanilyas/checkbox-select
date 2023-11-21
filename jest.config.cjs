/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testTimeout: 25000,
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(t|j)sx?$': 'esbuild-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-dnd|dnd-core|@react-dnd|react-dnd-html5-backend)/)'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  globalSetup: "./jestGlobalSetup.cjs",
  setupFilesAfterEnv: [
    './jestSetup.cjs',
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js'
  },
  resetMocks: false
};
