import serviceRepository from "../repositories/serviceRepository.js";
import projectRepository from "../repositories/projectRepository.js";
import galleryRepository from "../repositories/galleryRepository.js";
import jobRepository from "../repositories/jobRepository.js";
import applicationRepository from "../repositories/applicationRepository.js";
import contactRepository from "../repositories/contactRepository.js";

export class DashboardService {
  async getDashboardData() {
    const [
      totalServices,
      totalProjects,
      totalGalleryImages,
      totalCareerJobs,
      totalApplications,
      totalContactEnquiries,
      recentEnquiries,
      recentApplications
    ] = await Promise.all([
      serviceRepository.count(),
      projectRepository.count(),
      galleryRepository.count(),
      jobRepository.count(),
      applicationRepository.count(),
      contactRepository.count(),
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
        totalContactEnquiries
      },
      recentEnquiries,
      recentApplications
    };
  }
}

export default new DashboardService();
