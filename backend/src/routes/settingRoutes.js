import { Router } from "express";
import { getSettings, updateSettings } from "../controllers/settingsController.js";
import { settingValidator } from "../validators/settingValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

/**
 * @swagger
 * /settings:
 *   get:
 *     summary: Get website settings
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: Settings retrieved successfully
 */
router.get("/", getSettings);

/**
 * @swagger
 * /settings:
 *   put:
 *     summary: Update website settings
 *     tags: [Settings]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Settings updated successfully
 */
router.put(
  "/",
  protectAdmin,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "favicon", maxCount: 1 }
  ]),
  settingValidator,
  validate,
  updateSettings
);

export default router;
