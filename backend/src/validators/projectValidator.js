import { body } from "express-validator";

export const projectValidator = [
  body("title").notEmpty().withMessage("Project title is required"),
  body("slug").notEmpty().withMessage("Project slug is required"),
  body("category").notEmpty().withMessage("Category is required")
];
