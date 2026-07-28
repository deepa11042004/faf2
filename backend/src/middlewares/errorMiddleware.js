import { ApiResponse } from "../utils/apiResponse.js";
import { HTTP_STATUS } from "../config/constants.js";

export const errorHandler = (err, req, res, next) => {
  console.error("Global Error Handler:", err);

  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";

  return ApiResponse.error(
    res,
    message,
    process.env.NODE_ENV === "development" ? [err.stack] : [],
    statusCode
  );
};
