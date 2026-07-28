import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import galleryService from "../services/galleryService.js";
import { processImageToWebP } from "../utils/imageProcessor.js";
import path from "path";

export const getGallery = asyncHandler(async (req, res) => {
  const data = await galleryService.getAllGalleryItems(req.query);
  return ApiResponse.success(res, "Gallery items fetched successfully.", data);
});

export const createGalleryItem = asyncHandler(async (req, res) => {
  let imagePath = null;
  if (req.file) {
    imagePath = await processImageToWebP(
      req.file.path,
      path.join(process.cwd(), "public/uploads/gallery")
    );
  }

  const galleryData = {
    ...req.body,
    imagePath: imagePath || req.body.imagePath
  };

  const item = await galleryService.createGalleryItem(galleryData);
  return ApiResponse.success(res, "Gallery item created successfully.", item, 201);
});

export const updateGalleryItem = asyncHandler(async (req, res) => {
  let imagePath = undefined;
  if (req.file) {
    imagePath = await processImageToWebP(
      req.file.path,
      path.join(process.cwd(), "public/uploads/gallery")
    );
  }

  const updateData = {
    ...req.body
  };
  if (imagePath) {
    updateData.imagePath = imagePath;
  }

  const item = await galleryService.updateGalleryItem(req.params.id, updateData);
  return ApiResponse.success(res, "Gallery item updated successfully.", item);
});

export const deleteGalleryItem = asyncHandler(async (req, res) => {
  await galleryService.deleteGalleryItem(req.params.id);
  return ApiResponse.success(res, "Gallery item deleted successfully.");
});
