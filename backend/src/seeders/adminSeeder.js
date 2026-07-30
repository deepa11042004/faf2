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
  WebsiteSetting,
  Device
} from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();

export const seedAllData = async (isStandalone = false) => {
  try {
    if (isStandalone) {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
    }
    console.log("Database synced for seeding...");

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
          description: "Our comprehensive CCTV installation services provide end-to-end video surveillance for commercial, industrial, and residential premises.",
          bannerImage: "/uploads/services/cctv-banner.webp",
          status: "active",
          displayOrder: 1
        },
        {
          title: "Fire Alarm & Detection Systems",
          slug: "fire-alarm-system",
          shortDescription: "Advanced smoke detectors, heat sensors, and emergency evacuation alarms.",
          description: "Protect lives and valuable infrastructure with state-of-the-art fire alarm and early suppression systems.",
          bannerImage: "/uploads/services/fire-banner.webp",
          status: "active",
          displayOrder: 2
        },
        {
          title: "Access Control Systems",
          slug: "access-control-system",
          shortDescription: "Biometric fingerprint, RFID cards, and touchless facial recognition.",
          description: "Control entry points and prevent unauthorized access with cloud-managed access control solutions.",
          bannerImage: "/uploads/services/access-banner.webp",
          status: "active",
          displayOrder: 3
        },
        {
          title: "Security Guard Services",
          slug: "security-guard-services",
          shortDescription: "Vetted physical security guards, armed officers, and event supervisors.",
          description: "Trained, background-checked, and disciplined security personnel for commercial complexes and VIP protection.",
          bannerImage: "/uploads/services/guards-banner.webp",
          status: "active",
          displayOrder: 4
        },
        {
          title: "Public Address (PA) Systems",
          slug: "public-address-system",
          shortDescription: "Multi-zone audio announcement speakers and emergency paging systems.",
          description: "Clear, crisp, and multi-channel audio systems for commercial buildings, schools, shopping malls, and industrial complexes.",
          bannerImage: "/uploads/services/pa-banner.webp",
          status: "active",
          displayOrder: 5
        }
      ]);
      console.log("✔ 5 Core Security Services Created.");
    }

    // 3. Service Categories Catalog (Force sync/re-populate)
    await Device.destroy({ where: {}, truncate: false });
    await Device.bulkCreate([
        // Security Guard Services Categories
        {
          name: "Corporate & Commercial Office Guards",
          category: "Security Guard Services",
          serviceSlug: "security-guard-services",
          description: "Uniformed, background-checked security personnel trained in front desk access management, visitor logs, and corporate safety.",
          bestFor: ["Corporate Towers", "IT Parks", "Banking Hubs", "Commercial Plazas"],
          keyFeatures: ["Front Desk Visitor Verification", "Badge & Pass Checking", "CCTV Monitoring Support", "Emergency First Response"],
          imagePath: "/images/services/guards-service.png",
          status: "active",
          displayOrder: 1
        },
        {
          name: "Industrial & Manufacturing Plant Guards",
          category: "Security Guard Services",
          serviceSlug: "security-guard-services",
          description: "Heavy-duty security forces trained for material gate passes, perimeter patrolling, and industrial hazard awareness.",
          bestFor: ["Manufacturing Plants", "Warehouses", "Construction Sites", "Steel Mills"],
          keyFeatures: ["24/7 Gate Patrol", "Material & Vehicle Pass Check", "Fire Safety & Extinguisher Trained", "Shift Patrol Rotation"],
          imagePath: "/images/services/guards/industrial-security-guards/img-a76ntaw8.jpg",
          status: "active",
          displayOrder: 2
        },
        {
          name: "Residential Society & Gated Community Security",
          category: "Security Guard Services",
          serviceSlug: "security-guard-services",
          description: "Friendly and vigilant security personnel protecting apartment complexes, villas, and residential townships.",
          bestFor: ["Gated Communities", "Apartment Societies", "Private Estates"],
          keyFeatures: ["Intercom Resident Check", "Parking & Traffic Flow Guard", "Night Patrol Duty", "CCTV Gate Supervision"],
          imagePath: "/images/services/guards/residential-security-guards/img-exiamctq.jpg",
          status: "active",
          displayOrder: 3
        },
        {
          name: "VIP Protection & Event Security Bouncers",
          category: "Security Guard Services",
          serviceSlug: "security-guard-services",
          description: "High-level personal security officers and trained bouncers for high-profile events, VIP movement, and crowd management.",
          bestFor: ["VVIP Movement", "Exhibitions & Concerts", "High Profile Events"],
          keyFeatures: ["Crowd Control Expertise", "Armed & Unarmed Escort", "Threat Risk Assessment", "Executive Protection"],
          imagePath: "/images/services/guards/vip-protection/img-6095veu5.jpg",
          status: "active",
          displayOrder: 4
        },

        // CCTV Cameras
        {
          name: "Dome Cameras",
          category: "CCTV Surveillance",
          serviceSlug: "cctv-installation",
          description: "Ideal for indoor surveillance where aesthetics and wide-angle coverage are important.",
          bestFor: ["Offices", "Retail Stores", "Hospitals", "Schools", "Hotels"],
          keyFeatures: ["Compact Design", "Vandal Resistant", "Infrared Night Vision", "Wide Viewing Angle"],
          imagePath: "/images/cctv/dome/VP26P-T89uJ-K4JLfuW_mCGOQrehf1rTqHCz-e2Ljrz9UIAVV-9CwaTIQ05Vyji3sHDITRGOT28HEbJolIJ4vxOc3XKNS2_ieTsd_ldZsFmy7S1e2i6z9JFD7CMT0Ptxb4PLN5SO9c0LMySMybvgzvYgPg2xSp16lX5LEPaujV7xkX-xJEwe5PBxzNHCZ9RJ.jpg",
          status: "active",
          displayOrder: 1
        },
        {
          name: "Bullet Cameras",
          category: "CCTV Surveillance",
          serviceSlug: "cctv-installation",
          description: "Designed for long-range outdoor monitoring with high weather resistance and IR illumination.",
          bestFor: ["Perimeters", "Parking Lots", "Warehouses", "Building Exteriors"],
          keyFeatures: ["Long Range IR", "IP67 Weatherproof", "Optical Zoom", "Motion Detection"],
          imagePath: "/images/cctv/bullet/5TenuMzbyrJ5zN0UlqJ7rRLKXQYhnM_6tlAF-812He89l4ewjQtYvQz0U2gZmtzIoM6DEV_Gaeq8nlCT8uvXj5FAljDUZ-rQ5YkGEwo6ebOoaRxWLaQcNQ93W5_gFrc0emAiera7qRjYWAA2QgLExxjNhqQAc2YUDddtb9G4wvWKnSd4kuK8n5sQOwy2MUIv.jpg",
          status: "active",
          displayOrder: 2
        },
        {
          name: "PTZ (Pan-Tilt-Zoom) Cameras",
          category: "CCTV Surveillance",
          serviceSlug: "cctv-installation",
          description: "Provides 360-degree motorized pan, tilt, and powerful optical zoom for active security control.",
          bestFor: ["Industrial Parks", "Malls", "Airports", "Public Squares"],
          keyFeatures: ["360° Continuous Pan", "30x Optical Zoom", "Auto Tracking", "Preset Patrol Routes"],
          imagePath: "/images/cctv/ptz/3VZFzDiO72AoHwakoDLGNvHFkLVUgiVmdQducNVhp2laXGUxxuEihWeWCa-dDMGUnVT_4KzH-nq6GoEdOUfhEhtTd0Uw1GJt9KAX4BozyvPncmgmz6YE_TzQrfjNbxXV-HT9CTiX5wZ6GKdIAAwg0fmn0PHaX2GytRGANTYHlXqYsuhCuCNXrSxhmb.jpg",
          status: "active",
          displayOrder: 3
        },
        {
          name: "Turret Cameras",
          category: "CCTV Surveillance",
          serviceSlug: "cctv-installation",
          description: "Ball-and-socket design eliminating lens reflections, perfect for clear night vision performance.",
          bestFor: ["Corridors", "Elevators", "Lobbies", "Stores"],
          keyFeatures: ["No IR Reflection", "EXIR Night Vision", "Easy Angle Adjustment", "Smart Detection"],
          imagePath: "/images/cctv/turret/SvQC9SamokYa7sTS8d57xE6RX4is0AptxJ0pWwb0wOzmoVwoAI2LVJpHdmDKkU2PGaOk88CNx-qw6KQPH8VTuY-kMrIJhqGAU8LhseFuWWAbCREn3WIqZtlSe09DraRjrzIdCUzG17iu3Vahl1EPzytuUgGX27CgJCnglQ5hPIwkQcXNJmB37jTOJZ.jpg",
          status: "active",
          displayOrder: 4
        },
        {
          name: "Fisheye 360° Panoramic Camera",
          category: "CCTV Surveillance",
          serviceSlug: "cctv-installation",
          description: "Single-sensor 360-degree panoramic view eliminating blind spots across large indoor areas.",
          bestFor: ["Open Offices", "Supermarkets", "Convention Centers"],
          keyFeatures: ["360° Panoramic View", "Dewarping Software Support", "Virtual PTZ Modes"],
          imagePath: "/images/cctv/fisheye/TS5VM_mHNYm7bXe2lP9oy6g7-5BofDkiQ5COLXuSLCnY4JYiRnmbwRmN26mSEd3Bjuqj9cWWIEP25sIF3zzyDz3Ya9jBW4Dt1YY1WYlHtUk5Rc9rcPrfhx0riX-XOiUo44q49C74HTi7xGLBykUjQ-7E7KN3G-7Y28IdCcePmkDYmg_Zd2dIEmtV5KaqPgR4.jpg",
          status: "active",
          displayOrder: 5
        },
        {
          name: "Fire Alarm Control Panel (FACP)",
          category: "Fire Safety",
          serviceSlug: "fire-alarm-system",
          description: "Centralized intelligent control panel monitoring all fire loops, smoke sensors, and notification horns.",
          bestFor: ["Commercial Buildings", "Industrial Plants", "Hospitals", "Hotels"],
          keyFeatures: ["Multi-Zone Monitoring", "Battery Backup", "Automated Sprinkler Relay", "LCD Touch Interface"],
          imagePath: "/images/services/fire-alarm/fire-alarm-control-panel-facp/img-41gyjfrk.jpg",
          status: "active",
          displayOrder: 6
        },
        {
          name: "Optical Smoke Detector",
          category: "Fire Safety",
          serviceSlug: "fire-alarm-system",
          description: "Photoelectric smoke sensor detecting smoldering fires before open flames burst.",
          bestFor: ["Offices", "Server Rooms", "Bedrooms", "Libraries"],
          keyFeatures: ["360° Smoke Entry", "Dust Resistance", "Addressable Loop ID", "Built-in Sounder"],
          imagePath: "/images/services/fire-alarm/smoke-detector/img-4soj8cqs.jpg",
          status: "active",
          displayOrder: 7
        },
        {
          name: "Rate-of-Rise Heat Detector",
          category: "Fire Safety",
          serviceSlug: "fire-alarm-system",
          description: "Triggers emergency alert when ambient temperature rises rapidly, ideal for dusty or smoky environments.",
          bestFor: ["Kitchens", "Garages", "Boiler Rooms", "Factories"],
          keyFeatures: ["Dual Temperature Sensor", "High Humidity Tolerant", "Auto Reset"],
          imagePath: "/images/services/fire-alarm/heat-detector/img-empzt0kh.jpg",
          status: "active",
          displayOrder: 8
        },
        {
          name: "Biometric Fingerprint Reader",
          category: "Access Control",
          serviceSlug: "access-control-system",
          description: "High-precision optical fingerprint sensor supporting thousands of user templates and instant verification.",
          bestFor: ["Server Rooms", "Executive Offices", "Turnstiles"],
          keyFeatures: ["Live Finger Detection", "IP65 Rated", "Wiegand / OSDP Protocol", "Offline Buffer"],
          imagePath: "/images/services/access-control/biometric-fingerprint-reader/img-7yp7vslh.jpg",
          status: "active",
          displayOrder: 9
        },
        {
          name: "Touchless Facial Recognition Terminal",
          category: "Access Control",
          serviceSlug: "access-control-system",
          description: "AI-powered facial recognition terminal with temperature screening and mask detection.",
          bestFor: ["Corporate Lobbies", "Cleanrooms", "High Security Gates"],
          keyFeatures: ["0.2s Facial Recognition", "Anti-Spoofing AI", "Touchless Hygiene", "10,000 Capacity"],
          imagePath: "/images/services/access-control/facial-recognition-terminal/img-8gta2svs.jpg",
          status: "active",
          displayOrder: 10
        },
        {
          name: "Electromagnetic Lock (Maglock)",
          category: "Access Control",
          serviceSlug: "access-control-system",
          description: "Heavy-duty 600lbs/1200lbs holding force magnetic door lock for glass, wood, and metal doors.",
          bestFor: ["Emergency Exits", "Glass Doors", "Commercial Entrances"],
          keyFeatures: ["600lbs Holding Force", "Fail-Safe Operation", "LED Status Indicator", "Zero Residual Magnetism"],
          imagePath: "/images/services/access-control/electromagnetic-lock-maglock/img-sya1h93d.jpg",
          status: "active",
          displayOrder: 11
        },
        {
          name: "Multi-Zone PA System Amplifier",
          category: "PA System",
          serviceSlug: "public-address-system",
          description: "Commercial power amplifier with multi-zone speaker control, Bluetooth, and emergency priority broadcast.",
          bestFor: ["Shopping Malls", "Schools", "Auditoriums", "Factories"],
          keyFeatures: ["240W RMS Output", "6 Independent Zones", "Chime & Siren Inputs", "FM/USB/Bluetooth"],
          imagePath: "/images/services/pa-system/pa-system-amplifier/img-43bln0p3.jpg",
          status: "active",
          displayOrder: 12
        },
        {
          name: "Flush Ceiling Speaker",
          category: "PA System",
          serviceSlug: "public-address-system",
          description: "High-fidelity coaxial ceiling speaker for background music and clear acoustic voice paging.",
          bestFor: ["Corporate Offices", "Restaurants", "Retail Outlets"],
          keyFeatures: ["100V Line Transformer", "ABS Flush Mount", "Crisp Vocal Clarity"],
          imagePath: "/images/services/pa-system/ceiling-speaker/img-avkv7ivs.jpg",
          status: "active",
          displayOrder: 13
        }
      ]);
      console.log("✔ Service Categories Catalog Populated with 17 Items.");

    // 4. Projects Portfolio & Images
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

      await ProjectImage.bulkCreate([
        { projectId: p1.id, imagePath: "/uploads/projects/project-tower-1.webp", isPrimary: true },
        { projectId: p1.id, imagePath: "/uploads/projects/project-tower-2.webp", isPrimary: false },
        { projectId: p2.id, imagePath: "/uploads/projects/project-plant-1.webp", isPrimary: true },
        { projectId: p3.id, imagePath: "/uploads/projects/project-bank-1.webp", isPrimary: true }
      ]);
      console.log("✔ Featured Projects Portfolio Created.");
    }

    // 5. Gallery Items
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

    // 6. Career Job Openings
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

    // 7. Career Applications
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

    // 8. Contact Enquiries
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

    // 9. Website Settings
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

if (process.argv[1]?.endsWith("adminSeeder.js")) {
  seedAllData(true);
}
