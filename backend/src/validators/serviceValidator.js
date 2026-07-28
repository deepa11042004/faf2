import { body } from "express-validator";

export const serviceValidator = [
  body("title").notEmpty().withMessage("Service title is required"),
  body("slug").notEmpty().withMessage("Service slug is required"),
  body("status").optional().isIn(["active", "inactive"]).withMessage("Status must be active or inactive")
];
