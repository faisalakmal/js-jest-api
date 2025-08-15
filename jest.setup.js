const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${NODE_ENV}`;
const envPath = path.resolve(process.cwd(), envFile);

// Coba load file .env sesuai NODE_ENV
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log(`[Jest Setup] Loaded environment file: ${envFile}`);
} else {
  // Fallback ke .env biasa
  dotenv.config();
  console.log(`[Jest Setup] Environment file "${envFile}" not found. Fallback to default ".env"`);
}

// Fungsi untuk validasi env yang wajib ada
function required(key) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return process.env[key];
}

// Contoh penggunaan (optional, bisa dihapus jika tidak ingin hardcoded di sini)
// required("BASE_URL_GOREST");
// required("ACCESS_TOKEN");

module.exports = { required };
