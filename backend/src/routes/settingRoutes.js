import { Router } from "express";
import { getSettings, updateSettings } from "../controllers/settingsController.js";
import { settingValidator } from "../validators/settingValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", getSettings);
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
