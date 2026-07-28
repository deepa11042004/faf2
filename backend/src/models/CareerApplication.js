import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CareerApplication = sequelize.define(
  "CareerApplication",
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
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "career_jobs",
        key: "id"
      },
      onDelete: "SET NULL"
    },
    applicantName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    resumePath: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    appliedJob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    applicationStatus: {
      type: DataTypes.ENUM("pending", "reviewed", "shortlisted", "rejected"),
      defaultValue: "pending"
    }
  },
  {
    tableName: "career_applications"
  }
);

export default CareerApplication;
