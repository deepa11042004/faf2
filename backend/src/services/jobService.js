import jobRepository from "../repositories/jobRepository.js";

export class JobService {
  async getAllJobs(queryParams) {
    return await jobRepository.findAll(queryParams);
  }

  async getJobById(id) {
    const job = await jobRepository.findById(id);
    if (!job) throw new Error("Job listing not found.");
    return job;
  }

  async createJob(data) {
    return await jobRepository.create(data);
  }

  async updateJob(id, data) {
    const updated = await jobRepository.update(id, data);
    if (!updated) throw new Error("Job listing not found.");
    return updated;
  }

  async deleteJob(id) {
    const deleted = await jobRepository.delete(id);
    if (!deleted) throw new Error("Job listing not found.");
    return true;
  }
}

export default new JobService();
