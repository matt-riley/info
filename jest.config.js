module.exports = {
  projects: [{
    displayName: 'CLOUDFUNCTIONS',
    testMatch: ["<rootDir>/cloud-functions/functions/src/**/*.test.ts"],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  }],
  moduleFileExtensions: ['ts', 'js', 'node'],
};
