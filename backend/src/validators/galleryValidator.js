import { body } from "express-validator";

export const galleryValidator = [
  body("category").notEmpty().withMessage("Category is required")
];
