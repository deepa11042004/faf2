import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import teamService from "../services/teamService.js";
import { processImageToWebP } from "../utils/imageProcessor.js";
import path from "path";

export const getMembers = asyncHandler(async (req, res) => {
  const data = await teamService.getAllMembers(req.query);
  return ApiResponse.success(res, "Team members retrieved successfully.", data);
});

export const getMemberById = asyncHandler(async (req, res) => {
  const member = await teamService.getMemberById(req.params.id);
  return ApiResponse.success(res, "Team member details fetched successfully.", member);
});

export const createMember = asyncHandler(async (req, res) => {
  let photoPath = null;
  if (req.file) {
    photoPath = await processImageToWebP(
      req.file.path,
      path.join(process.cwd(), "public/uploads/team")
    );
  }

  const memberData = {
    ...req.body,
    photo: photoPath || req.body.photo
  };

  const member = await teamService.createMember(memberData);
  return ApiResponse.success(res, "Team member created successfully.", member, 201);
});

export const updateMember = asyncHandler(async (req, res) => {
  let photoPath = undefined;
  if (req.file) {
    photoPath = await processImageToWebP(
      req.file.path,
      path.join(process.cwd(), "public/uploads/team")
    );
  }

  const updateData = {
    ...req.body
  };
  if (photoPath) {
    updateData.photo = photoPath;
  } else if (req.body.removePhoto === 'true') {
    updateData.photo = null;
  }

  const member = await teamService.updateMember(req.params.id, updateData);
  return ApiResponse.success(res, "Team member updated successfully.", member);
});

export const deleteMember = asyncHandler(async (req, res) => {
  await teamService.deleteMember(req.params.id);
  return ApiResponse.success(res, "Team member deleted successfully.");
});
