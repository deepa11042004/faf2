import { Router } from "express";
import { getGallery, createGalleryItem, updateGalleryItem, deleteGalleryItem } from "../controllers/galleryController.js";
import { galleryValidator } from "../validators/galleryValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

router.get("/", getGallery);
router.post("/", protectAdmin, upload.single("image"), galleryValidator, validate, createGalleryItem);
router.put("/:id", protectAdmin, upload.single("image"), updateGalleryItem);
router.delete("/:id", protectAdmin, deleteGalleryItem);

export default router;
