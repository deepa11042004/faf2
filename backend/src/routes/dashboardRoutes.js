import { Router } from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", protectAdmin, getDashboard);

export default router;
