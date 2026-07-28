import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import dashboardService from "../services/dashboardService.js";

export const getDashboard = asyncHandler(async (req, res) => {
  const data = await dashboardService.getDashboardData();
  return ApiResponse.success(res, "Dashboard analytics fetched successfully.", data);
});
