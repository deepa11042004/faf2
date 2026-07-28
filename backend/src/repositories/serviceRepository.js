import { Service } from "../models/index.js";
import { Op } from "sequelize";

export class ServiceRepository {
  async findAll({ page = 1, limit = 10, search = "", status = null }) {
    const offset = (page - 1) * limit;
    const where = {};

    if (status) {
      where.status = status;
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { shortDescription: { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await Service.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [["displayOrder", "ASC"], ["createdAt", "DESC"]]
    });

    return {
      services: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10)
    };
  }

  async findById(id) {
    return await Service.findByPk(id);
  }

  async findBySlug(slug) {
    return await Service.findOne({ where: { slug } });
  }

  async create(data) {
    return await Service.create(data);
  }

  async update(id, data) {
    const service = await Service.findByPk(id);
    if (!service) return null;
    return await service.update(data);
  }

  async delete(id) {
    const service = await Service.findByPk(id);
    if (!service) return false;
    await service.destroy();
    return true;
  }

  async count() {
    return await Service.count();
  }
}

export default new ServiceRepository();
