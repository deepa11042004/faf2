import deviceService from "../services/deviceService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { HTTP_STATUS } from "../config/constants.js";

export const getDevices = asyncHandler(async (req, res) => {
  const result = await deviceService.getAllDevices(req.query);
  return ApiResponse.success(res, "Devices retrieved successfully.", result);
});

export const getDeviceById = asyncHandler(async (req, res) => {
  const device = await deviceService.getDeviceById(req.params.id);
  return ApiResponse.success(res, "Device details retrieved.", device);
});

export const createDevice = asyncHandler(async (req, res) => {
  const files = req.files || (req.file ? [req.file] : []);
  const device = await deviceService.createDevice(req.body, files);
  return ApiResponse.success(res, "Device created successfully.", device, HTTP_STATUS.CREATED);
});

export const updateDevice = asyncHandler(async (req, res) => {
  const files = req.files || (req.file ? [req.file] : []);
  const device = await deviceService.updateDevice(req.params.id, req.body, files);
  return ApiResponse.success(res, "Device updated successfully.", device);
});

export const deleteDevice = asyncHandler(async (req, res) => {
  await deviceService.deleteDevice(req.params.id);
  return ApiResponse.success(res, "Device deleted successfully.");
});
