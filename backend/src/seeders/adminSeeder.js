import {
  sequelize,
  Admin,
  Service,
  Project,
  ProjectImage,
  Gallery,
  CareerJob,
  CareerApplication,
  ContactEnquiry,
  WebsiteSetting
} from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();

export const seedAllData = async (isStandalone = false) => {
  try {
    if (isStandalone) {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
      console.log("Database synced for seeding...");
    }

    // 1. Admin Account
    const adminCount = await Admin.count();
    if (adminCount === 0) {
      await Admin.create({
        name: "Super Admin",
        email: "admin@familyanchor.in",
        password: "AdminPassword123!",
        role: "admin"
      });
      console.log("✔ Admin Account Created: admin@familyanchor.in / AdminPassword123!");
    }

    // 2. Services
    const serviceCount = await Service.count();
    if (serviceCount === 0) {
      await Service.bulkCreate([
        {
          title: "CCTV Installation & Live Surveillance",
          slug: "cctv-installation",
          shortDescription: "High-definition IP cameras, night vision, and 24/7 remote monitoring.",
          description: "Our comprehensive CCTV installation services provide end-to-end video surveillance for commercial, industrial, and residential premises. Features include AI facial recognition, thermal imaging, remote mobile app viewing, and automatic motion alerts.",
          bannerImage: "/uploads/services/cctv-banner.webp",
          status: "active",
          displayOrder: 1,
          seoTitle: "CCTV Installation & Security Surveillance Services",
          seoDescription: "Professional CCTV camera installation, HD night vision IP cameras, and 24/7 live remote security monitoring."
        },
        {
          title: "Fire Alarm & Detection Systems",
          slug: "fire-alarm-system",
          shortDescription: "Advanced smoke detectors, heat sensors, and emergency evacuation alarms.",
          description: "Protect lives and valuable infrastructure with state-of-the-art fire alarm and early suppression systems. Compliant with international safety codes, featuring multi-zone control panels and automatic fire department dispatch integration.",
          bannerImage: "/uploads/services/fire-banner.webp",
          status: "active",
          displayOrder: 2,
          seoTitle: "Fire Alarm System Installation & Safety Maintenance",
          seoDescription: "Early sensor smoke detection, fire alarm control panels, and automatic emergency alert systems."
        },
        {
          title: "Access Control Systems",
          slug: "access-control-system",
          shortDescription: "Biometric fingerprint, RFID cards, and touchless facial recognition.",
          description: "Control entry points and prevent unauthorized access with cloud-managed access control solutions. Integrated with attendance tracking, door locks, vehicular turnstiles, and visitor management systems.",
          bannerImage: "/uploads/services/access-banner.webp",
          status: "active",
          displayOrder: 3,
          seoTitle: "Biometric Access Control & Gate Entry Systems",
          seoDescription: "Smart card entry, facial recognition scanners, biometric door access, and visitor tracking systems."
        },
        {
          title: "Security Guard Services",
          slug: "security-guard-services",
          shortDescription: "Vetted physical security guards, armed officers, and event supervisors.",
          description: "Trained, background-checked, and disciplined security personnel for commercial complexes, industrial plants, residential societies, and VIP protection. Trained in emergency response and fire evacuation.",
          bannerImage: "/uploads/services/guards-banner.webp",
          status: "active",
          displayOrder: 4,
          seoTitle: "Professional Security Guard & Patrol Services",
          seoDescription: "Rigorous physical security personnel, corporate guards, armed officers, and site supervisors."
        },
        {
          title: "Public Address (PA) Systems",
          slug: "public-address-system",
          shortDescription: "Multi-zone audio announcement speakers and emergency paging systems.",
          description: "Clear, crisp, and multi-channel audio systems for commercial buildings, schools, shopping malls, and industrial complexes. Supports background music, emergency broadcasts, and scheduled acoustic signals.",
          bannerImage: "/uploads/services/pa-banner.webp",
          status: "active",
          displayOrder: 5,
          seoTitle: "Public Address (PA) & Emergency Announcement Systems",
          seoDescription: "Multi-zone PA acoustic systems, emergency paging speakers, and background music infrastructure."
        }
      ]);
      console.log("✔ 5 Core Security Services Created.");
    } else {
      await Service.update({ bannerImage: "/uploads/services/cctv-banner.webp" }, { where: { slug: "cctv-installation" } });
      await Service.update({ bannerImage: "/uploads/services/fire-banner.webp" }, { where: { slug: "fire-alarm-system" } });
      await Service.update({ bannerImage: "/uploads/services/access-banner.webp" }, { where: { slug: "access-control-system" } });
      await Service.update({ bannerImage: "/uploads/services/guards-banner.webp" }, { where: { slug: "security-guard-services" } });
      await Service.update({ bannerImage: "/uploads/services/pa-banner.webp" }, { where: { slug: "public-address-system" } });
      console.log("✔ 5 Core Security Services Image Paths Updated.");
    }

    // 3. Projects Portfolio & Images
    const projectCount = await Project.count();
    if (projectCount === 0) {
      const p1 = await Project.create({
        title: "Commercial High-Rise Security Tower",
        slug: "commercial-high-rise-security-tower",
        category: "Commercial Security",
        location: "Main Boulevard, Ranchi",
        clientName: "Apex Corporate Hub",
        completionDate: "2025-11-15",
        description: "Deployed 120+ AI IP CCTV cameras, multi-zone fire alarm panels, and biometric turnstiles across 25 floors.",
        featured: true,
        status: "active"
      });

      const p2 = await Project.create({
        title: "Industrial Manufacturing Plant Safety",
        slug: "industrial-manufacturing-plant-safety",
        category: "Industrial Safety",
        location: "Industrial Zone, Jamshedpur",
        clientName: "Tata Ancillary Complex",
        completionDate: "2025-08-20",
        description: "Installed explosive-proof thermal cameras, perimeter laser intrusion detection, and trained 24/7 security guard forces.",
        featured: true,
        status: "active"
      });

      const p3 = await Project.create({
        title: "Banking Regional Branch Security Deployment",
        slug: "banking-regional-branch-security",
        category: "Commercial Security",
        location: "Multi-State Network, Bihar & Jharkhand",
        clientName: "National Commercial Bank",
        completionDate: "2025-12-01",
        description: "Implemented dual-custody access control, vault vibration sensors, and centralized command center monitoring for 30 branch locations.",
        featured: true,
        status: "active"
      });

      // Add Project Images
      await ProjectImage.bulkCreate([
        { projectId: p1.id, imagePath: "/uploads/projects/project-tower-1.webp", isPrimary: true },
        { projectId: p1.id, imagePath: "/uploads/projects/project-tower-2.webp", isPrimary: false },
        { projectId: p2.id, imagePath: "/uploads/projects/project-plant-1.webp", isPrimary: true },
        { projectId: p3.id, imagePath: "/uploads/projects/project-bank-1.webp", isPrimary: true }
      ]);
      console.log("✔ Featured Projects Portfolio Created.");
    }

    // 4. Gallery Items
    const galleryCount = await Gallery.count();
    if (galleryCount === 0) {
      await Gallery.bulkCreate([
        {
          category: "CCTV Installation",
          imagePath: "/uploads/gallery/gallery-cctv.webp",
          title: "High-Definition 4K Camera Array Setup",
          altText: "CCTV Camera Installation",
          status: "active",
          displayOrder: 1
        },
        {
          category: "Fire Safety",
          imagePath: "/uploads/gallery/gallery-fire.webp",
          title: "Centralized Fire Alarm Control Panel",
          altText: "Fire Safety System",
          status: "active",
          displayOrder: 2
        },
        {
          category: "Access Control",
          imagePath: "/uploads/gallery/gallery-access.webp",
          title: "Biometric Touchless Entry Gate",
          altText: "Access Control Scanner",
          status: "active",
          displayOrder: 3
        },
        {
          category: "Security Guards",
          imagePath: "/uploads/gallery/gallery-guards.webp",
          title: "Physical Guard Morning Inspection & Parade",
          altText: "Security Guards Team",
          status: "active",
          displayOrder: 4
        },
        {
          category: "Command Center",
          imagePath: "/uploads/gallery/gallery-command.webp",
          title: "24/7 Live Video Monitoring Command Room",
          altText: "Security Surveillance Room",
          status: "active",
          displayOrder: 5
        }
      ]);
      console.log("✔ Media Gallery Assets Created.");
    }

    // 5. Career Job Openings
    const jobCount = await CareerJob.count();
    if (jobCount === 0) {
      await CareerJob.bulkCreate([
        {
          jobTitle: "Senior CCTV & ELV System Engineer",
          department: "Technical Field Services",
          location: "Ranchi / Field Operations",
          employmentType: "Full Time",
          experience: "3-5 Years",
          salary: "₹35,000 - ₹50,000 / month",
          description: "Responsible for IP CCTV network configuration, NVR installation, access control programming, and client troubleshooting.",
          requirements: "Degree/Diploma in Electronics or Electrical Engineering. Proficient with Hikvision, Dahua, and Honeywell systems.",
          responsibilities: "Lead installation projects, conduct site surveys, program control panels, and train junior technicians.",
          benefits: "Travel allowance, health insurance, performance bonus, and career progression.",
          status: "active"
        },
        {
          jobTitle: "Armed & Unarmed Security Guard Officer",
          department: "Physical Security Operations",
          location: "Ranchi / Jamshedpur / Dhanbad",
          employmentType: "Full Time",
          experience: "1-2 Years",
          salary: "₹18,000 - ₹25,000 / month",
          description: "Patrol premises, monitor visitor entry registers, conduct vehicle checks, and handle emergency protocols.",
          requirements: "Minimum 10th pass. Height: 5'7\"+. Ex-servicemen preferred. Clean background record.",
          status: "active"
        },
        {
          jobTitle: "Fire Safety & Suppression Inspector",
          department: "Fire Engineering",
          location: "Corporate Office, Ranchi",
          employmentType: "Full Time",
          experience: "2-4 Years",
          salary: "₹28,000 - ₹38,000 / month",
          description: "Perform quarterly fire audit inspections, test alarm sounders, pressure check hydrants, and issue compliance reports.",
          status: "active"
        }
      ]);
      console.log("✔ Career Job Openings Created.");
    }

    // 6. Career Applications (Sample leads)
    const appCount = await CareerApplication.count();
    if (appCount === 0) {
      await CareerApplication.bulkCreate([
        {
          applicantName: "Rahul Sharma",
          email: "rahul.sharma@example.com",
          phone: "+91 9876543210",
          resumePath: "/uploads/resumes/sample-resume-1.pdf",
          appliedJob: "Senior CCTV & ELV System Engineer",
          message: "I have 4 years of experience installing Hikvision IP cameras and access control systems in commercial buildings.",
          applicationStatus: "reviewed"
        },
        {
          applicantName: "Amit Kumar Singh",
          email: "amit.singh@example.com",
          phone: "+91 9123456789",
          resumePath: "/uploads/resumes/sample-resume-2.pdf",
          appliedJob: "Armed & Unarmed Security Guard Officer",
          message: "Ex-Army personnel with 6 years of security patrol background. Looking for supervisor positions.",
          applicationStatus: "pending"
        }
      ]);
      console.log("✔ Sample Career Applications Created.");
    }

    // 7. Contact Enquiries (Sample leads)
    const contactCount = await ContactEnquiry.count();
    if (contactCount === 0) {
      await ContactEnquiry.bulkCreate([
        {
          name: "Vikramaditya Roy",
          email: "v.roy@royconstruction.com",
          phone: "+91 9431109876",
          company: "Roy Construction & Developers",
          interestedService: "CCTV Installation & Live Surveillance",
          message: "We need a complete security quote for a new 12-story commercial plaza currently under construction in Ranchi.",
          status: "new",
          adminNotes: "Client requested site visit on Friday morning."
        },
        {
          name: "Sumanth Mehta",
          email: "s.mehta@mehtatextiles.in",
          phone: "+91 9835012345",
          company: "Mehta Industrial Textiles",
          interestedService: "Fire Alarm & Detection Systems",
          message: "Interested in upgrading our textile mill fire alarm system to meet mandatory factory inspector guidelines.",
          status: "in_progress",
          adminNotes: "Quotation sent via email. Awaiting management review."
        },
        {
          name: "Priya Ananda",
          email: "priya@greenwoodheights.org",
          phone: "+91 9934098765",
          company: "Greenwood Heights Apartment Association",
          interestedService: "Security Guard Services",
          message: "Looking for 6 trained security guards for 24/7 gate security and visitor management.",
          status: "completed"
        }
      ]);
      console.log("✔ Sample Contact Enquiries Created.");
    }

    // 8. Website Settings
    const settingCount = await WebsiteSetting.count();
    if (settingCount === 0) {
      await WebsiteSetting.create({
        id: 1,
        companyName: "Family Anchor Facilities Pvt. Ltd.",
        email: "info@familyanchor.in",
        phone: "+91 9386126258",
        whatsapp: "+91 9386126258",
        address: "Corporate Office, Security Complex, Main Boulevard, Ranchi, Jharkhand - 834001",
        workingHours: "24/7 Active Operations & Emergency Support",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        footerText: "Your Trusted Partner in Comprehensive Security & Facility Management. Protecting people, property, and business operations for over a decade."
      });
      console.log("✔ Complete Website Settings & Contact Information Created.");
    }

    console.log("\n✨ DATABASE SEEDING COMPLETED SUCCESSFULLY!");
    if (isStandalone) {
      process.exit(0);
    }
    return true;
  } catch (error) {
    console.error("Error Seeding Complete Database:", error);
    if (isStandalone) {
      process.exit(1);
    }
    throw error;
  }
};

import { fileURLToPath } from "url";
if (process.argv[1] && process.argv[1] === fileURLToPath(import.meta.url)) {
  seedAllData(true);
}

