import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import authService from "../services/authService.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  return ApiResponse.success(res, "Login successful.", data);
});

export const logout = asyncHandler(async (req, res) => {
  return ApiResponse.success(res, "Logout successful.");
});

export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  await authService.changePassword(req.admin.id, currentPassword, newPassword);
  return ApiResponse.success(res, "Password changed successfully.");
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  await authService.forgotPassword(email);
  return ApiResponse.success(res, "Password reset instructions sent if email exists.");
});

export const resetPassword = asyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;
  await authService.resetPassword(token, newPassword);
  return ApiResponse.success(res, "Password has been reset successfully.");
});
