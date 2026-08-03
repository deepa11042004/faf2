import { Router } from "express";
import { getApplications, getApplicationById, createApplication, deleteApplication } from "../controllers/applicationsController.js";
import { applicationValidator } from "../validators/applicationValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

/**
 * @swagger
 * /applications:
 *   get:
 *     summary: Get all career applications
 *     tags: [Career Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Applications retrieved successfully
 */
router.get("/", protectAdmin, getApplications);

/**
 * @swagger
 * /applications/{id}:
 *   get:
 *     summary: Get application by ID
 *     tags: [Career Applications]
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
 *         description: Application fetched successfully
 */
router.get("/:id", protectAdmin, getApplicationById);

/**
 * @swagger
 * /applications:
 *   post:
 *     summary: Submit a new career application
 *     tags: [Career Applications]
 *     responses:
 *       201:
 *         description: Application submitted successfully
 */
router.post("/", upload.single("resume"), applicationValidator, validate, createApplication);

/**
 * @swagger
 * /applications/{id}:
 *   delete:
 *     summary: Delete an application
 *     tags: [Career Applications]
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
 *         description: Application deleted successfully
 */
router.delete("/:id", protectAdmin, deleteApplication);

export default router;
