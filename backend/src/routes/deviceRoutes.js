import { Router } from "express";
import {
  getDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice
} from "../controllers/deviceController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

// Public route to fetch device catalog
router.get("/", getDevices);
router.get("/:id", getDeviceById);

// Protected Admin Routes
router.post("/", protectAdmin, upload.single("image"), createDevice);
router.put("/:id", protectAdmin, upload.single("image"), updateDevice);
router.delete("/:id", protectAdmin, deleteDevice);

export default router;
