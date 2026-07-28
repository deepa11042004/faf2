import adminRepository from "../repositories/adminRepository.js";
import { generateToken } from "../utils/jwt.js";
import crypto from "crypto";

export class AuthService {
  async login(email, password) {
    const admin = await adminRepository.findByEmail(email);
    if (!admin) {
      throw new Error("Invalid email or password.");
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      throw new Error("Invalid email or password.");
    }

    const token = generateToken({
      id: admin.id,
      uuid: admin.uuid,
      email: admin.email,
      role: admin.role
    });

    return {
      token,
      admin: {
        id: admin.id,
        uuid: admin.uuid,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    };
  }

  async changePassword(adminId, currentPassword, newPassword) {
    const admin = await adminRepository.findById(adminId);
    if (!admin) {
      throw new Error("Admin not found.");
    }

    const isMatch = await admin.comparePassword(currentPassword);
    if (!isMatch) {
      throw new Error("Incorrect current password.");
    }

    admin.password = newPassword;
    await admin.save();
    return true;
  }

  async forgotPassword(email) {
    const admin = await adminRepository.findByEmail(email);
    if (!admin) {
      // Return true to avoid user enumeration
      return true;
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpire = new Date(Date.now() + 3600000); // 1 hour

    await adminRepository.update(admin.id, {
      resetToken,
      resetTokenExpire
    });

    // Note: In production, send reset email with token link.
    console.log(`Password Reset Token for ${email}: ${resetToken}`);
    return true;
  }

  async resetPassword(resetToken, newPassword) {
    const admin = await adminRepository.findByToken(resetToken);
    if (!admin || !admin.resetTokenExpire || admin.resetTokenExpire < new Date()) {
      throw new Error("Invalid or expired password reset token.");
    }

    admin.password = newPassword;
    admin.resetToken = null;
    admin.resetTokenExpire = null;
    await admin.save();
    return true;
  }
}

export default new AuthService();
