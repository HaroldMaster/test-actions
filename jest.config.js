module.exports = {
    globals: {
      'ts-jest': {
        allowSyntheticDefaultImports: true
      }
    },
    setupFilesAfterEnv: ['<rootDir>/jest-global-setup.ts'],
    testPathIgnorePatterns: ['/src/environments/*', '/node_modules/'],
    transformIgnorePatterns: ['node_modules/(?!(ngx-auto-unsubscribe|ladda|spin.js)/)'],
    modulePathIgnorePatterns: ['/cypress/'],
    coverageReporters: ['html', 'text', 'text-summary'],
    transform: {
      '^.+\\spec.(ts|html)$': 'ts-jest'
    }
  };