import { Project, ProjectImage } from "../models/index.js";
import { Op } from "sequelize";

export class ProjectRepository {
  async findAll({ page = 1, limit = 10, search = "", category = null, status = null }) {
    const offset = (page - 1) * limit;
    const where = {};

    if (status) where.status = status;
    if (category) where.category = category;
    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { clientName: { [Op.like]: `%${search}%` } },
        { location: { [Op.like]: `%${search}%` } }
      ];
    }

    const { rows, count } = await Project.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [["createdAt", "DESC"]],
      include: [{ model: ProjectImage, as: "images" }]
    });

    return {
      projects: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page, 10)
    };
  }

  async findById(id) {
    return await Project.findByPk(id, {
      include: [{ model: ProjectImage, as: "images" }]
    });
  }

  async findBySlug(slug) {
    return await Project.findOne({
      where: { slug },
      include: [{ model: ProjectImage, as: "images" }]
    });
  }

  async create(data) {
    return await Project.create(data);
  }

  async addImages(projectId, imagePaths) {
    const records = imagePaths.map((path, index) => ({
      projectId,
      imagePath: path,
      isPrimary: index === 0
    }));
    return await ProjectImage.bulkCreate(records);
  }

  async update(id, data) {
    const project = await Project.findByPk(id);
    if (!project) return null;
    return await project.update(data);
  }

  async delete(id) {
    const project = await Project.findByPk(id);
    if (!project) return false;
    await project.destroy();
    return true;
  }

  async deleteImages(projectId) {
    return await ProjectImage.destroy({ where: { projectId } });
  }

  async count() {
    return await Project.count();
  }
}

export default new ProjectRepository();
