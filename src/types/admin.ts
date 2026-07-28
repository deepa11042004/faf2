export interface AdminUser {
  id: number;
  uuid: string;
  name: string;
  email: string;
  role: string;
}

export interface ServiceItem {
  id: number;
  uuid: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  bannerImage?: string;
  galleryImages?: string[];
  seoTitle?: string;
  seoDescription?: string;
  metaKeywords?: string;
  status: "active" | "inactive";
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectImageItem {
  id: number;
  uuid: string;
  projectId: number;
  imagePath: string;
  isPrimary: boolean;
}

export interface ProjectItem {
  id: number;
  uuid: string;
  title: string;
  slug: string;
  category: string;
  location?: string;
  clientName?: string;
  completionDate?: string;
  description?: string;
  featured: boolean;
  status: "active" | "inactive";
  seoTitle?: string;
  seoDescription?: string;
  images?: ProjectImageItem[];
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: number;
  uuid: string;
  category: string;
  imagePath: string;
  title?: string;
  altText?: string;
  status: "active" | "inactive";
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CareerJobItem {
  id: number;
  uuid: string;
  jobTitle: string;
  department?: string;
  location: string;
  employmentType: string;
  experience?: string;
  salary?: string;
  description?: string;
  requirements?: string;
  responsibilities?: string;
  benefits?: string;
  status: "active" | "inactive";
  lastDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CareerApplicationItem {
  id: number;
  uuid: string;
  jobId?: number;
  applicantName: string;
  email: string;
  phone: string;
  resumePath: string;
  appliedJob?: string;
  message?: string;
  applicationStatus: "pending" | "reviewed" | "shortlisted" | "rejected";
  job?: {
    jobTitle: string;
    department?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ContactEnquiryItem {
  id: number;
  uuid: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  interestedService?: string;
  message: string;
  date: string;
  status: "new" | "in_progress" | "completed" | "closed";
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WebsiteSettingItem {
  id: number;
  companyName: string;
  address?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  googleMap?: string;
  logo?: string;
  favicon?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  workingHours?: string;
  footerText?: string;
}

export interface DashboardMetrics {
  stats: {
    totalServices: number;
    totalProjects: number;
    totalGalleryImages: number;
    totalCareerJobs: number;
    totalApplications: number;
    totalContactEnquiries: number;
  };
  recentEnquiries: ContactEnquiryItem[];
  recentApplications: CareerApplicationItem[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  errors?: any[];
}
