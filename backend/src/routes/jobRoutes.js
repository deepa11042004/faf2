import { Router } from "express";
import { getJobs, createJob, updateJob, deleteJob } from "../controllers/jobsController.js";
import { jobValidator } from "../validators/jobValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Career Jobs]
 *     responses:
 *       200:
 *         description: Jobs retrieved successfully
 */
router.get("/", getJobs);

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job
 *     tags: [Career Jobs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Job created successfully
 */
router.post("/", protectAdmin, jobValidator, validate, createJob);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a job
 *     tags: [Career Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job updated successfully
 */
router.put("/:id", protectAdmin, updateJob);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job
 *     tags: [Career Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job deleted successfully
 */
router.delete("/:id", protectAdmin, deleteJob);

export default router;
