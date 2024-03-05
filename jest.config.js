module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>./src/setup-tests.tsx'],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/.jest/mock/fileMock.tsx",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      },
      "resolver": undefined,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}
