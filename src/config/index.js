const path = require("path");
const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV || "development";

const envFile = `.env.${NODE_ENV}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

function required(key) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return process.env[key];
}

module.exports = {
  env: { NODE_ENV },
  api: {
    BASE_URL: required("BASE_URL"),
    TOKEN: required("GOREST_TOKEN"),
  },
  defaults: {
    REQUEST_TIMEOUT: 10000,
    PAGE: 1,
    LIMIT: 20,
  },
};
