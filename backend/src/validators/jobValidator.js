import { body } from "express-validator";

export const jobValidator = [
  body("jobTitle").notEmpty().withMessage("Job title is required"),
  body("location").notEmpty().withMessage("Location is required")
];
