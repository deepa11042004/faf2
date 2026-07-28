import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ProjectImage = sequelize.define(
  "ProjectImage",
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
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "projects",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    imagePath: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: "project_images"
  }
);

export default ProjectImage;
