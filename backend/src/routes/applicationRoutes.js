import { Router } from "express";
import { getApplications, getApplicationById, createApplication, deleteApplication } from "../controllers/applicationsController.js";
import { applicationValidator } from "../validators/applicationValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", protectAdmin, getApplications);
router.get("/:id", protectAdmin, getApplicationById);
router.post("/", upload.single("resume"), applicationValidator, validate, createApplication);
router.delete("/:id", protectAdmin, deleteApplication);

export default router;
