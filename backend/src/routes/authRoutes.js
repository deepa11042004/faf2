import { Router } from "express";
import { login, logout, changePassword, forgotPassword, resetPassword, seedDatabase } from "../controllers/authController.js";
import { loginValidator, changePasswordValidator, forgotPasswordValidator, resetPasswordValidator } from "../validators/authValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Admin Login
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Logged in successfully
 */
router.post("/login", loginValidator, validate, login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Admin Logout
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
 */
router.post("/logout", protectAdmin, logout);

/**
 * @swagger
 * /auth/change-password:
 *   post:
 *     summary: Change Admin Password
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Password changed successfully
 */
router.post("/change-password", protectAdmin, changePasswordValidator, validate, changePassword);

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Forgot Password
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Reset email sent
 */
router.post("/forgot-password", forgotPasswordValidator, validate, forgotPassword);

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset Password
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Password reset successfully
 */
router.post("/reset-password", resetPasswordValidator, validate, resetPassword);

router.all("/seed", seedDatabase);

export default router;
