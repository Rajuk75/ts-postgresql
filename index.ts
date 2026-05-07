import Express from "express";
import { connectDB } from "./src/config/database";
import UserModel from "./src/models/user.model";
import userRoutes from "./src/routes/user.routes";

const app = Express();

// Middleware
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Initialize
const init = async () => {
  try {
    // Connect Database
    await connectDB();

    // Create Tables
    await UserModel.createTable();

    // Routes
    app.use("/", userRoutes);

    // Health check
    app.get("/", (req, res) => {
      res.json({ message: "Server is running 🚀" });
    });

    // Start Server
    app.listen(5000, () => {
      console.log("✓ Server is listening on http://localhost:5000");
    });
  } catch (error) {
    console.error("Failed to initialize server:", error);
    process.exit(1);
  }
};

init();