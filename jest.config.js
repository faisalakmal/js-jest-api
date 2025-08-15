const path = require("path");
const dotenv = require("dotenv");

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

/** To check activated environment */
// console.log(`[Jest Config] The Envinronment is: ${envFile}`);

module.exports = {
  testEnvironment: "node",
  verbose: true,
  testTimeout: 15000,
  testMatch: ["**/src/tests/**/*.test.js"]
};
