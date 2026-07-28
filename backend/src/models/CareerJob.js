import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CareerJob = sequelize.define(
  "CareerJob",
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
    jobTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    employmentType: {
      type: DataTypes.STRING(50),
      defaultValue: "Full Time"
    },
    experience: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    salary: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: true
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responsibilities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    benefits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    lastDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  },
  {
    tableName: "career_jobs"
  }
);

export default CareerJob;
