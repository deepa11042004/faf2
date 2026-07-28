import projectRepository from "../repositories/projectRepository.js";

export class ProjectService {
  async getAllProjects(queryParams) {
    return await projectRepository.findAll(queryParams);
  }

  async getProjectById(id) {
    const project = await projectRepository.findById(id);
    if (!project) throw new Error("Project not found.");
    return project;
  }

  async createProject(data, imagePaths = []) {
    const existing = await projectRepository.findBySlug(data.slug);
    if (existing) throw new Error("Project with this slug already exists.");

    const project = await projectRepository.create(data);
    if (imagePaths && imagePaths.length > 0) {
      await projectRepository.addImages(project.id, imagePaths);
    }
    return await projectRepository.findById(project.id);
  }

  async updateProject(id, data, newImagePaths = null) {
    const project = await projectRepository.findById(id);
    if (!project) throw new Error("Project not found.");

    if (data.slug && data.slug !== project.slug) {
      const existing = await projectRepository.findBySlug(data.slug);
      if (existing) throw new Error("Project with this slug already exists.");
    }

    await projectRepository.update(id, data);

    if (newImagePaths && newImagePaths.length > 0) {
      await projectRepository.deleteImages(id);
      await projectRepository.addImages(id, newImagePaths);
    }

    return await projectRepository.findById(id);
  }

  async deleteProject(id) {
    const deleted = await projectRepository.delete(id);
    if (!deleted) throw new Error("Project not found.");
    return true;
  }
}

export default new ProjectService();
