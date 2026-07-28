import { Gallery } from "../models/index.js";
import { Op } from "sequelize";

export class GalleryRepository {
  async findAll({ page = 1, limit = 12, category = null, status = null }) {
    const offset = (page - 1) * limit;
    const where = {};

    if (status) where.status = status;
    if (category) where.category = category;

    const { rows, count } = await Gallery.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [["displayOrder", "ASC"], ["createdAt", "DESC"]]
    });

    return {
      gallery: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10)
    };
  }

  async findById(id) {
    return await Gallery.findByPk(id);
  }

  async create(data) {
    return await Gallery.create(data);
  }

  async update(id, data) {
    const item = await Gallery.findByPk(id);
    if (!item) return null;
    return await item.update(data);
  }

  async delete(id) {
    const item = await Gallery.findByPk(id);
    if (!item) return false;
    await item.destroy();
    return true;
  }

  async count() {
    return await Gallery.count();
  }
}

export default new GalleryRepository();
