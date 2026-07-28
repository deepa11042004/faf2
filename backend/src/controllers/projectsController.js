import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import projectService from "../services/projectService.js";
import { processImageToWebP } from "../utils/imageProcessor.js";
import path from "path";

export const getProjects = asyncHandler(async (req, res) => {
  const data = await projectService.getAllProjects(req.query);
  return ApiResponse.success(res, "Projects retrieved successfully.", data);
});

export const getProjectById = asyncHandler(async (req, res) => {
  const project = await projectService.getProjectById(req.params.id);
  return ApiResponse.success(res, "Project details fetched successfully.", project);
});

export const createProject = asyncHandler(async (req, res) => {
  const imagePaths = [];
  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      const webpPath = await processImageToWebP(
        file.path,
        path.join(process.cwd(), "public/uploads/projects")
      );
      if (webpPath) imagePaths.push(webpPath);
    }
  }

  const project = await projectService.createProject(req.body, imagePaths);
  return ApiResponse.success(res, "Project created successfully.", project, 201);
});

export const updateProject = asyncHandler(async (req, res) => {
  let newImagePaths = null;
  if (req.files && req.files.length > 0) {
    newImagePaths = [];
    for (const file of req.files) {
      const webpPath = await processImageToWebP(
        file.path,
        path.join(process.cwd(), "public/uploads/projects")
      );
      if (webpPath) newImagePaths.push(webpPath);
    }
  }

  const project = await projectService.updateProject(req.params.id, req.body, newImagePaths);
  return ApiResponse.success(res, "Project updated successfully.", project);
});

export const deleteProject = asyncHandler(async (req, res) => {
  await projectService.deleteProject(req.params.id);
  return ApiResponse.success(res, "Project deleted successfully.");
});
