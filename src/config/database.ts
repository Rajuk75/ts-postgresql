import { Client } from "pg";

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "learning_ts",
  password: "admin123",
  port: 5432,
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