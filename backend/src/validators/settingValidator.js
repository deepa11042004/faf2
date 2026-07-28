import { body } from "express-validator";

export const settingValidator = [
  body("companyName").optional().notEmpty().withMessage("Company name cannot be empty"),
  body("email").optional().isEmail().withMessage("Valid email required")
];
