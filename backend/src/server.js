import app from "./app.js";
import { connectDB } from "./config/database.js";
import { sequelize } from "./models/index.js";
import { seedAllData } from "./seeders/adminSeeder.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5005;

const startServer = async () => {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Sync Models with Database
    await sequelize.sync({ alter: false });
    console.log("Sequelize Models Synchronized.");

    // 3. Auto-Seed Database if empty (initial deployment on Coolify)
    try {
      await seedAllData(false);
    } catch (seedError) {
      console.error("Auto-seeding check failed:", seedError.message);
    }

    // 4. Start Express Server
    app.listen(PORT, () => {
      console.log(`====================================================`);
      console.log(`FAF Security Backend Server Running on Port: ${PORT}`);
      console.log(`Swagger Documentation Available at: http://localhost:${PORT}/api-docs`);
      console.log(`API V1 Endpoint Base URL: http://localhost:${PORT}/api/v1`);
      console.log(`====================================================`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
