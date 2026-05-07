import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "learning_ts",
  password: process.env.DB_PASSWORD || "admin123",
  port: Number(process.env.DB_PORT || 5432),
});

export const connectDB = async () => {
  try {
    await db.connect();
    console.log("✓ Database Connected Successfully!");
  } catch (error) {
    console.log("✗ Database Connection Failed");
    console.log(error);
    process.exit(1);
  }
};

export default db;