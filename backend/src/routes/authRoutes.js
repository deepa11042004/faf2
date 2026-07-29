import { Router } from "express";
import { login, logout, changePassword, forgotPassword, resetPassword, seedDatabase } from "../controllers/authController.js";
import { loginValidator, changePasswordValidator, forgotPasswordValidator, resetPasswordValidator } from "../validators/authValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/login", loginValidator, validate, login);
router.post("/logout", protectAdmin, logout);
router.post("/change-password", protectAdmin, changePasswordValidator, validate, changePassword);
router.post("/forgot-password", forgotPasswordValidator, validate, forgotPassword);
router.post("/reset-password", resetPasswordValidator, validate, resetPassword);
router.all("/seed", seedDatabase);


export default router;
