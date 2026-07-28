import applicationRepository from "../repositories/applicationRepository.js";

export class ApplicationService {
  async getAllApplications(queryParams) {
    return await applicationRepository.findAll(queryParams);
  }

  async getApplicationById(id) {
    const application = await applicationRepository.findById(id);
    if (!application) throw new Error("Career application not found.");
    return application;
  }

  async createApplication(data) {
    return await applicationRepository.create(data);
  }

  async updateApplicationStatus(id, applicationStatus) {
    const updated = await applicationRepository.updateStatus(id, applicationStatus);
    if (!updated) throw new Error("Career application not found.");
    return updated;
  }

  async deleteApplication(id) {
    const deleted = await applicationRepository.delete(id);
    if (!deleted) throw new Error("Career application not found.");
    return true;
  }
}

export default new ApplicationService();
