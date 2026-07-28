import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ContactEnquiry = sequelize.define(
  "ContactEnquiry",
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
    company: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    interestedService: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.ENUM("new", "in_progress", "completed", "closed"),
      defaultValue: "new"
    },
    adminNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    tableName: "contact_enquiries"
  }
);

export default ContactEnquiry;
