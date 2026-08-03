import Device from "../models/Device.js";
import { Op } from "sequelize";

export class DeviceRepository {
  async findAll({ search, category, serviceSlug, status, page = 1, limit = 20 }) {
    const where = {};

    if (status) {
      where.status = status;
    }

    if (category) {
      where.category = category;
    }

    if (serviceSlug) {
      where.serviceSlug = serviceSlug;
    }

    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }

    const offset = (page - 1) * limit;

    const { rows, count } = await Device.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["displayOrder", "ASC"], ["id", "ASC"], ["createdAt", "ASC"]]
    });

    return {
      devices: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page)
    };
  }

  async getMaxDisplayOrder(category = null) {
    const where = {};
    if (category) {
      where.category = category;
    }
    const max = await Device.max("displayOrder", { where });
    return max || 0;
  }

  async findById(id) {
    return await Device.findByPk(id);
  }

  async create(data) {
    return await Device.create(data);
  }

  async update(id, data) {
    const device = await Device.findByPk(id);
    if (!device) return null;
    return await device.update(data);
  }

  async delete(id) {
    const device = await Device.findByPk(id);
    if (!device) return false;
    await device.destroy();
    return true;
  }
}

export default new DeviceRepository();
