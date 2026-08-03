import { Router } from "express";
import { getEnquiries, getEnquiryById, createEnquiry, updateEnquiry, deleteEnquiry } from "../controllers/contactController.js";
import { contactValidator } from "../validators/contactValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Submit a new contact enquiry
 *     tags: [Contact]
 *     responses:
 *       201:
 *         description: Enquiry submitted successfully
 */
router.post("/", contactValidator, validate, createEnquiry);

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Get all contact enquiries
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Enquiries retrieved successfully
 */
router.get("/", protectAdmin, getEnquiries);

/**
 * @swagger
 * /contact/{id}:
 *   get:
 *     summary: Get enquiry by ID
 *     tags: [Contact]
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
 *         description: Enquiry fetched successfully
 */
router.get("/:id", protectAdmin, getEnquiryById);

/**
 * @swagger
 * /contact/{id}:
 *   put:
 *     summary: Update an enquiry
 *     tags: [Contact]
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
 *         description: Enquiry updated successfully
 */
router.put("/:id", protectAdmin, updateEnquiry);

/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     summary: Delete an enquiry
 *     tags: [Contact]
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
 *         description: Enquiry deleted successfully
 */
router.delete("/:id", protectAdmin, deleteEnquiry);

export default router;
