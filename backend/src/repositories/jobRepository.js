import { CareerJob } from "../models/index.js";
import { Op } from "sequelize";

export class JobRepository {
  async findAll({ page = 1, limit = 10, search = "", status = null }) {
    const offset = (page - 1) * limit;
    const where = {};

    if (status) where.status = status;
    if (search) {
      where[Op.or] = [
        { jobTitle: { [Op.like]: `%${search}%` } },
        { department: { [Op.like]: `%${search}%` } },
        { location: { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await CareerJob.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [["createdAt", "DESC"]]
    });

    return {
      jobs: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10)
    };
  }

  async findById(id) {
    return await CareerJob.findByPk(id);
  }

  async create(data) {
    return await CareerJob.create(data);
  }

  async update(id, data) {
    const job = await CareerJob.findByPk(id);
    if (!job) return null;
    return await job.update(data);
  }

  async delete(id) {
    const job = await CareerJob.findByPk(id);
    if (!job) return false;
    await job.destroy();
    return true;
  }

  async count() {
    return await CareerJob.count();
  }
}

export default new JobRepository();
