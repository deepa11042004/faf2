import { Router } from "express";
import { getJobs, createJob, updateJob, deleteJob } from "../controllers/jobsController.js";
import { jobValidator } from "../validators/jobValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", getJobs);
router.post("/", protectAdmin, jobValidator, validate, createJob);
router.put("/:id", protectAdmin, updateJob);
router.delete("/:id", protectAdmin, deleteJob);

export default router;
