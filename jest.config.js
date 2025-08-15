module.exports = {
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
  verbose: true,
  testTimeout: 15000,
  testMatch: ["**/src/tests/**/*.test.js"],
};
