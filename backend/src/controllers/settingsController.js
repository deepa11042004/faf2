import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import settingService from "../services/settingService.js";
import { processImageToWebP } from "../utils/imageProcessor.js";
import path from "path";

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await settingService.getSettings();
  return ApiResponse.success(res, "Website settings retrieved successfully.", settings);
});

export const updateSettings = asyncHandler(async (req, res) => {
  const updateData = { ...req.body };

  if (req.files) {
    if (req.files.logo && req.files.logo[0]) {
      updateData.logo = await processImageToWebP(
        req.files.logo[0].path,
        path.join(process.cwd(), "public/uploads/logos")
      );
    }
    if (req.files.favicon && req.files.favicon[0]) {
      updateData.favicon = await processImageToWebP(
        req.files.favicon[0].path,
        path.join(process.cwd(), "public/uploads/logos")
      );
    }
  }

  const settings = await settingService.updateSettings(updateData);
  return ApiResponse.success(res, "Website settings updated successfully.", settings);
});
