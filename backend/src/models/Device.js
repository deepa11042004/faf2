import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Device = sequelize.define(
  "Device",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "CCTV Surveillance"
    },
    serviceSlug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bestFor: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    keyFeatures: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    imagePath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    displayOrder: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    tableName: "security_devices",
    timestamps: true,
    underscored: true
  }
);

export default Device;
