import { Router } from "express";
import { getGallery, createGalleryItem, updateGalleryItem, deleteGalleryItem } from "../controllers/galleryController.js";
import { galleryValidator } from "../validators/galleryValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = Router();

/**
 * @swagger
 * /gallery:
 *   get:
 *     summary: Get all gallery items
 *     tags: [Gallery]
 *     responses:
 *       200:
 *         description: Gallery items retrieved successfully
 */
router.get("/", getGallery);

/**
 * @swagger
 * /gallery:
 *   post:
 *     summary: Create a new gallery item
 *     tags: [Gallery]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Gallery item created successfully
 */
router.post("/", protectAdmin, upload.single("image"), galleryValidator, validate, createGalleryItem);

/**
 * @swagger
 * /gallery/{id}:
 *   put:
 *     summary: Update a gallery item
 *     tags: [Gallery]
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
 *         description: Gallery item updated successfully
 */
router.put("/:id", protectAdmin, upload.single("image"), updateGalleryItem);

/**
 * @swagger
 * /gallery/{id}:
 *   delete:
 *     summary: Delete a gallery item
 *     tags: [Gallery]
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
 *         description: Gallery item deleted successfully
 */
router.delete("/:id", protectAdmin, deleteGalleryItem);

export default router;
