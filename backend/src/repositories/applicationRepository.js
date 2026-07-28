import { CareerApplication, CareerJob } from "../models/index.js";

export class ApplicationRepository {
  async findAll({ page = 1, limit = 10, status = null }) {
    const offset = (page - 1) * limit;
    const where = {};

    if (status) where.applicationStatus = status;

    const { rows, count } = await CareerApplication.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [["createdAt", "DESC"]],
      include: [{ model: CareerJob, as: "job", attributes: ["jobTitle", "department"] }]
    });

    return {
      applications: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10)
    };
  }

  async findById(id) {
    return await CareerApplication.findByPk(id, {
      include: [{ model: CareerJob, as: "job" }]
    });
  }

  async create(data) {
    return await CareerApplication.create(data);
  }

  async updateStatus(id, applicationStatus) {
    const application = await CareerApplication.findByPk(id);
    if (!application) return null;
    return await application.update({ applicationStatus });
  }

  async delete(id) {
    const application = await CareerApplication.findByPk(id);
    if (!application) return false;
    await application.destroy();
    return true;
  }

  async count() {
    return await CareerApplication.count();
  }

  async findRecent(limit = 5) {
    return await CareerApplication.findAll({
      limit: parseInt(limit, 10),
      order: [["createdAt", "DESC"]],
      include: [{ model: CareerJob, as: "job", attributes: ["jobTitle"] }]
    });
  }
}

export default new ApplicationRepository();
