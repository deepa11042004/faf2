import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const WebsiteSetting = sequelize.define(
  "WebsiteSetting",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    companyName: {
      type: DataTypes.STRING(255),
      defaultValue: "Family Anchor Facilities Pvt. Ltd."
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alternatePhone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    whatsapp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    googleMap: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    favicon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    youtube: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    workingHours: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    footerText: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    tableName: "website_settings"
  }
);

export default WebsiteSetting;
