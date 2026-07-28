import { Admin } from "../models/index.js";

export class AdminRepository {
  async findByEmail(email) {
    return await Admin.findOne({ where: { email } });
  }

  async findById(id) {
    return await Admin.findByPk(id);
  }

  async findByToken(resetToken) {
    return await Admin.findOne({ where: { resetToken } });
  }

  async create(data) {
    return await Admin.create(data);
  }

  async update(id, data) {
    const admin = await Admin.findByPk(id);
    if (!admin) return null;
    return await admin.update(data);
  }
}

export default new AdminRepository();
