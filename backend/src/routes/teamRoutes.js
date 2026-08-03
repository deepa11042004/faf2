import express from "express";
import {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
} from "../controllers/teamController.js";
import { teamValidator } from "../validators/teamValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getMembers);
router.get("/:id", getMemberById);

// Admin Routes (Protected)
router.use(protectAdmin);

router.post(
  "/",
  upload.single("photo"),
  teamValidator,
  validate,
  createMember
);

router.put(
  "/:id",
  upload.single("photo"),
  teamValidator,
  validate,
  updateMember
);

router.delete("/:id", deleteMember);

export default router;
