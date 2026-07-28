import { body } from "express-validator";

export const applicationValidator = [
  body("applicantName").notEmpty().withMessage("Applicant name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone number is required")
];
