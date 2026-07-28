import { validationResult } from "express-validator";
import { ApiResponse } from "../utils/apiResponse.js";
import { HTTP_STATUS } from "../config/constants.js";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return ApiResponse.error(
      res,
      "Validation failed.",
      errors.array().map((err) => ({ field: err.path, message: err.msg })),
      HTTP_STATUS.UNPROCESSABLE_ENTITY
    );
  }
  next();
};
