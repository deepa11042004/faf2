import { Router } from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Get dashboard metrics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard metrics retrieved successfully
 */
router.get("/", protectAdmin, getDashboard);

export default router;
