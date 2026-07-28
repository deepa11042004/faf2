import serviceRepository from "../repositories/serviceRepository.js";

export class ServiceService {
  async getAllServices(queryParams) {
    return await serviceRepository.findAll(queryParams);
  }

  async getServiceById(id) {
    const service = await serviceRepository.findById(id);
    if (!service) throw new Error("Service not found.");
    return service;
  }

  async getServiceBySlug(slug) {
    const service = await serviceRepository.findBySlug(slug);
    if (!service) throw new Error("Service not found.");
    return service;
  }

  async createService(data) {
    const existing = await serviceRepository.findBySlug(data.slug);
    if (existing) throw new Error("Service with this slug already exists.");
    return await serviceRepository.create(data);
  }

  async updateService(id, data) {
    const service = await serviceRepository.findById(id);
    if (!service) throw new Error("Service not found.");
    if (data.slug && data.slug !== service.slug) {
      const existing = await serviceRepository.findBySlug(data.slug);
      if (existing) throw new Error("Service with this slug already exists.");
    }
    return await serviceRepository.update(id, data);
  }

  async deleteService(id) {
    const deleted = await serviceRepository.delete(id);
    if (!deleted) throw new Error("Service not found.");
    return true;
  }
}

export default new ServiceService();
