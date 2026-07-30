import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import serviceService from "../services/serviceService.js";
import { processImageToWebP } from "../utils/imageProcessor.js";
import path from "path";

export const getServices = asyncHandler(async (req, res) => {
  const data = await serviceService.getAllServices(req.query);
  return ApiResponse.success(res, "Services retrieved successfully.", data);
});

export const getServiceById = asyncHandler(async (req, res) => {
  const service = await serviceService.getServiceById(req.params.id);
  return ApiResponse.success(res, "Service details fetched successfully.", service);
});

export const createService = asyncHandler(async (req, res) => {
  let bannerImagePath = null;
  if (req.file) {
    bannerImagePath = await processImageToWebP(
      req.file.path,
      path.join(process.cwd(), "public/uploads/services")
    );
  }

  const serviceData = {
    ...req.body,
    bannerImage: bannerImagePath || req.body.bannerImage
  };

  const service = await serviceService.createService(serviceData);
  return ApiResponse.success(res, "Service created successfully.", service, 201);
});

export const updateService = asyncHandler(async (req, res) => {
  let bannerImagePath = undefined;
  if (req.file) {
    bannerImagePath = await processImageToWebP(
      req.file.path,
      path.join(process.cwd(), "public/uploads/services")
    );
  }

  const updateData = {
    ...req.body
  };
  if (bannerImagePath) {
    updateData.bannerImage = bannerImagePath;
  } else if (req.body.removeBannerImage === 'true') {
    updateData.bannerImage = null;
  }

  const service = await serviceService.updateService(req.params.id, updateData);
  return ApiResponse.success(res, "Service updated successfully.", service);
});

export const deleteService = asyncHandler(async (req, res) => {
  await serviceService.deleteService(req.params.id);
  return ApiResponse.success(res, "Service deleted successfully.");
});
