import { Router } from "express";
import { getEnquiries, getEnquiryById, createEnquiry, updateEnquiry, deleteEnquiry } from "../controllers/contactController.js";
import { contactValidator } from "../validators/contactValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", contactValidator, validate, createEnquiry);
router.get("/", protectAdmin, getEnquiries);
router.get("/:id", protectAdmin, getEnquiryById);
router.put("/:id", protectAdmin, updateEnquiry);
router.delete("/:id", protectAdmin, deleteEnquiry);

export default router;
