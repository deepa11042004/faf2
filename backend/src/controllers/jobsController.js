import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import jobService from "../services/jobService.js";

export const getJobs = asyncHandler(async (req, res) => {
  const data = await jobService.getAllJobs(req.query);
  return ApiResponse.success(res, "Job listings retrieved successfully.", data);
});

export const createJob = asyncHandler(async (req, res) => {
  const job = await jobService.createJob(req.body);
  return ApiResponse.success(res, "Job listing created successfully.", job, 201);
});

export const updateJob = asyncHandler(async (req, res) => {
  const job = await jobService.updateJob(req.params.id, req.body);
  return ApiResponse.success(res, "Job listing updated successfully.", job);
});

export const deleteJob = asyncHandler(async (req, res) => {
  await jobService.deleteJob(req.params.id);
  return ApiResponse.success(res, "Job listing deleted successfully.");
});
