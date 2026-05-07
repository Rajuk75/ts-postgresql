import db from '../config/database';

class UserModel {
  tableName = "users";

  fields = {
    id: "SERIAL PRIMARY KEY",
    name: "VARCHAR(100) NOT NULL",
    email: "VARCHAR(100) UNIQUE NOT NULL",
    password: "VARCHAR(255) NOT NULL",
    created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
  };

  async createTable() {
    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${this.tableName} (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      await db.query(createTableQuery);
      console.log(`✓ Table "${this.tableName}" created successfully!`);
    } catch (error) {
      console.error(`✗ Error creating table "${this.tableName}":`, error);
      throw error;
    }
  }
}
export default new UserModel();