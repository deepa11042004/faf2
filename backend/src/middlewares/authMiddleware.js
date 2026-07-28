import { verifyToken } from "../utils/jwt.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { HTTP_STATUS } from "../config/constants.js";
import adminRepository from "../repositories/adminRepository.js";

export const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return ApiResponse.error(
      res,
      "Unauthorized. Access token is required.",
      [],
      HTTP_STATUS.UNAUTHORIZED
    );
  }

  try {
    const decoded = verifyToken(token);
    const admin = await adminRepository.findById(decoded.id);

    if (!admin) {
      return ApiResponse.error(
        res,
        "Unauthorized. Admin account no longer exists.",
        [],
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    req.admin = admin;
    next();
  } catch (error) {
    return ApiResponse.error(
      res,
      "Unauthorized. Token invalid or expired.",
      [],
      HTTP_STATUS.UNAUTHORIZED
    );
  }
};
