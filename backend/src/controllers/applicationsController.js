import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import applicationService from "../services/applicationService.js";
import path from "path";

export const getApplications = asyncHandler(async (req, res) => {
  const data = await applicationService.getAllApplications(req.query);
  return ApiResponse.success(res, "Career applications fetched successfully.", data);
});

export const getApplicationById = asyncHandler(async (req, res) => {
  const application = await applicationService.getApplicationById(req.params.id);
  return ApiResponse.success(res, "Application details fetched successfully.", application);
});

export const createApplication = asyncHandler(async (req, res) => {
  let resumePath = null;
  if (req.file) {
    const relativePath = path.relative(path.join(process.cwd(), "public"), req.file.path).replace(/\\/g, "/");
    resumePath = `/${relativePath}`;
  }

  const appData = {
    ...req.body,
    resumePath: resumePath || req.body.resumePath
  };

  const application = await applicationService.createApplication(appData);
  return ApiResponse.success(res, "Application submitted successfully.", application, 201);
});

export const deleteApplication = asyncHandler(async (req, res) => {
  await applicationService.deleteApplication(req.params.id);
  return ApiResponse.success(res, "Application deleted successfully.");
});
