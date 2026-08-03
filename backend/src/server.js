import app from "./app.js";
import config from "./config/database.js";
// Server entry point - updated ordering
import { sequelize } from "./models/index.js";
import { seedAllData } from "./seeders/adminSeeder.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

// 1. Start Express Web Server immediately so container stays ALIVE
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`FAF Security Backend Server Running on Port: ${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}/api/v1`);
  console.log(`====================================================`);
});

// 2. Asynchronously initialize Database Connection & Seeding in background with retry
const initDatabase = async () => {
  try {
    await connectDB();
    await sequelize.sync({ force: false });
    console.log("✔ Sequelize Models Synchronized Successfully.");

    try {
      await seedAllData(false);
      console.log("✔ Database seeding check completed.");
    } catch (seedError) {
      console.error("Auto-seeding check error:", seedError.message);
    }
  } catch (dbError) {
    console.error("⚠️ Database connection error during startup:", dbError.message);
    console.log("Retrying database connection in 5 seconds...");
    setTimeout(initDatabase, 5000);
  }
};

initDatabase();

