import { Router } from "express";
import authRoutes from "./authRoutes.js";
import dashboardRoutes from "./dashboardRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import projectRoutes from "./projectRoutes.js";
import galleryRoutes from "./galleryRoutes.js";
import jobRoutes from "./jobRoutes.js";
import applicationRoutes from "./applicationRoutes.js";
import contactRoutes from "./contactRoutes.js";
import settingRoutes from "./settingRoutes.js";
import deviceRoutes from "./deviceRoutes.js";
import teamRoutes from "./teamRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/services", serviceRoutes);
router.use("/projects", projectRoutes);
router.use("/gallery", galleryRoutes);
router.use("/jobs", jobRoutes);
router.use("/applications", applicationRoutes);
router.use("/contact", contactRoutes);
router.use("/settings", settingRoutes);
router.use("/devices", deviceRoutes);
router.use("/team", teamRoutes);

export default router;
