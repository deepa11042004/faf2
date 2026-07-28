import { Router } from "express";
import { getServices, getServiceById, createService, updateService, deleteService } from "../controllers/servicesController.js";
import { serviceValidator } from "../validators/serviceValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", protectAdmin, upload.single("bannerImage"), serviceValidator, validate, createService);
router.put("/:id", protectAdmin, upload.single("bannerImage"), updateService);
router.delete("/:id", protectAdmin, deleteService);

export default router;
