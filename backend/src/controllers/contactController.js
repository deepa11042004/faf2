import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import contactService from "../services/contactService.js";

export const getEnquiries = asyncHandler(async (req, res) => {
  const data = await contactService.getAllEnquiries(req.query);
  return ApiResponse.success(res, "Contact enquiries fetched successfully.", data);
});

export const getEnquiryById = asyncHandler(async (req, res) => {
  const enquiry = await contactService.getEnquiryById(req.params.id);
  return ApiResponse.success(res, "Contact enquiry details fetched successfully.", enquiry);
});

export const createEnquiry = asyncHandler(async (req, res) => {
  const enquiry = await contactService.createEnquiry(req.body);
  return ApiResponse.success(res, "Your enquiry has been submitted successfully.", enquiry, 201);
});

export const updateEnquiry = asyncHandler(async (req, res) => {
  const enquiry = await contactService.updateEnquiry(req.params.id, req.body);
  return ApiResponse.success(res, "Contact enquiry updated successfully.", enquiry);
});

export const deleteEnquiry = asyncHandler(async (req, res) => {
  await contactService.deleteEnquiry(req.params.id);
  return ApiResponse.success(res, "Contact enquiry deleted successfully.");
});
