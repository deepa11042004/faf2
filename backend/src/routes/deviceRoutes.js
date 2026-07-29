import { Router } from "express";
import {
  getDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice
} from "../controllers/deviceController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { uploadSingle } from "../middlewares/uploadMiddleware.js";

const router = Router();

// Public route to fetch device catalog
router.get("/", getDevices);
router.get("/:id", getDeviceById);

// Protected Admin Routes
router.post("/", authenticate, uploadSingle("image"), createDevice);
router.put("/:id", authenticate, uploadSingle("image"), updateDevice);
router.delete("/:id", authenticate, deleteDevice);

export default router;
