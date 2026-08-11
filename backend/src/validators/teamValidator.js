import { body } from "express-validator";

export const teamValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("role").notEmpty().withMessage("Role is required"),
  body("status").optional().isIn(["active", "inactive"]).withMessage("Status must be active or inactive"),
  body("category").optional().isIn(["leadership", "security", "facility", "general"]).withMessage("Category must be leadership, security, facility, or general")
];
