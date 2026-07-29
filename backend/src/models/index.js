import sequelize from "../config/database.js";
import Admin from "./Admin.js";
import Service from "./Service.js";
import Project from "./Project.js";
import ProjectImage from "./ProjectImage.js";
import Gallery from "./Gallery.js";
import CareerJob from "./CareerJob.js";
import CareerApplication from "./CareerApplication.js";
import ContactEnquiry from "./ContactEnquiry.js";
import WebsiteSetting from "./WebsiteSetting.js";
import Device from "./Device.js";

// Define Associations

// One Project -> Many ProjectImages
Project.hasMany(ProjectImage, {
  foreignKey: "projectId",
  as: "images",
  onDelete: "CASCADE"
});
ProjectImage.belongsTo(Project, {
  foreignKey: "projectId",
  as: "project"
});

// One Job -> Many CareerApplications
CareerJob.hasMany(CareerApplication, {
  foreignKey: "jobId",
  as: "applications",
  onDelete: "SET NULL"
});
CareerApplication.belongsTo(CareerJob, {
  foreignKey: "jobId",
  as: "job"
});

export {
  sequelize,
  Admin,
  Service,
  Project,
  ProjectImage,
  Gallery,
  CareerJob,
  CareerApplication,
  ContactEnquiry,
  WebsiteSetting,
  Device
};
