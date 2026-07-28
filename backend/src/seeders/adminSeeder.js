import { sequelize, Admin, WebsiteSetting } from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();

const seedAdminAndSettings = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    const adminCount = await Admin.count();
    if (adminCount === 0) {
      await Admin.create({
        name: "Super Admin",
        email: "admin@familyanchor.in",
        password: "AdminPassword123!",
        role: "admin"
      });
      console.log("Default Admin Account Created: admin@familyanchor.in / AdminPassword123!");
    } else {
      console.log("Admin account already exists. Skipping admin seed.");
    }

    const settingCount = await WebsiteSetting.count();
    if (settingCount === 0) {
      await WebsiteSetting.create({
        id: 1,
        companyName: "Family Anchor Facilities Pvt. Ltd.",
        email: "info@familyanchor.in",
        phone: "+91 9386126258",
        whatsapp: "+91 9386126258",
        address: "Corporate Office, Security Complex, Main Boulevard, India",
        workingHours: "24/7 Active Operations & Customer Support"
      });
      console.log("Default Website Settings Created.");
    }

    process.exit(0);
  } catch (error) {
    console.error("Error Seeding Database:", error);
    process.exit(1);
  }
};

seedAdminAndSettings();
