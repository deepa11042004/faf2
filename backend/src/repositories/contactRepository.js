import { ContactEnquiry } from "../models/index.js";
import { Op } from "sequelize";

export class ContactRepository {
  async findAll({ page = 1, limit = 10, search = "", status = null }) {
    const offset = (page - 1) * limit;
    const where = {};

    if (status) where.status = status;
    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
        { phone: { [Op.like]: `%${search}%` } },
        { company: { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await ContactEnquiry.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [["createdAt", "DESC"]]
    });

    return {
      enquiries: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10)
    };
  }

  async findById(id) {
    return await ContactEnquiry.findByPk(id);
  }

  async create(data) {
    return await ContactEnquiry.create(data);
  }

  async update(id, data) {
    const enquiry = await ContactEnquiry.findByPk(id);
    if (!enquiry) return null;
    return await enquiry.update(data);
  }

  async delete(id) {
    const enquiry = await ContactEnquiry.findByPk(id);
    if (!enquiry) return false;
    await enquiry.destroy();
    return true;
  }

  async count() {
    return await ContactEnquiry.count();
  }

  async findRecent(limit = 5) {
    return await ContactEnquiry.findAll({
      limit: parseInt(limit, 10),
      order: [["createdAt", "DESC"]]
    });
  }
}

export default new ContactRepository();
