import serviceRepository from "../repositories/serviceRepository.js";
import projectRepository from "../repositories/projectRepository.js";
import galleryRepository from "../repositories/galleryRepository.js";
import jobRepository from "../repositories/jobRepository.js";
import applicationRepository from "../repositories/applicationRepository.js";
import contactRepository from "../repositories/contactRepository.js";
import { Device, TeamMember } from "../models/index.js";

export class DashboardService {
  async getDashboardData() {
    const [
      totalServices,
      totalProjects,
      totalGalleryImages,
      totalCareerJobs,
      totalApplications,
      totalContactEnquiries,
      totalCategories,
      totalTeamMembers,
      recentEnquiries,
      recentApplications
    ] = await Promise.all([
      serviceRepository.count(),
      projectRepository.count(),
      galleryRepository.count(),
      jobRepository.count(),
      applicationRepository.count(),
      contactRepository.count(),
      Device.count(),
      TeamMember.count(),
      contactRepository.findRecent(5),
      applicationRepository.findRecent(5)
    ]);

    return {
      stats: {
        totalServices,
        totalProjects,
        totalGalleryImages,
        totalCareerJobs,
        totalApplications,
        totalContactEnquiries,
        totalCategories,
        totalTeamMembers
      },
      recentEnquiries,
      recentApplications
    };
  }
}

export default new DashboardService();
