import { Router } from "express";
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from "../controllers/projectsController.js";
import { projectValidator } from "../validators/projectValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", protectAdmin, upload.array("images", 10), projectValidator, validate, createProject);
router.put("/:id", protectAdmin, upload.array("images", 10), updateProject);
router.delete("/:id", protectAdmin, deleteProject);

export default router;
