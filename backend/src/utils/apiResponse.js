import { HTTP_STATUS } from "../config/constants.js";

export class ApiResponse {
  static success(res, message = "Success", data = {}, statusCode = HTTP_STATUS.OK) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res, message = "Error occurred", errors = [], statusCode = HTTP_STATUS.BAD_REQUEST) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors: Array.isArray(errors) ? errors : [errors]
    });
  }
}
