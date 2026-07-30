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
      // 10 Security Guard Services Categories
      {
        name: "Residential Security Guards",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Vigilant and courteous security guards for gated communities, apartment societies, and private estates.",
        bestFor: ["Apartment Societies", "Gated Communities", "Private Villas", "Townships"],
        keyFeatures: ["Visitor Management", "Parking & Traffic Flow", "Night Patrol Duty", "Intercom Verification"],
        imagePath: "/images/services/security-guards/residential-security-guards/img-exiamctq.jpg",
        status: "active",
        displayOrder: 1
      },
      {
        name: "Commercial Security Guards",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Professional security coverage for commercial plazas, retail outlets, shopping centers, and business parks.",
        bestFor: ["Commercial Plazas", "Retail Stores", "Shopping Malls", "Business Parks"],
        keyFeatures: ["Access Register Control", "Crowd & Queue Management", "Loss Prevention", "Emergency First Response"],
        imagePath: "/images/services/security-guards/commercial-security-guards/img-0qqf0rjg.jpg",
        status: "active",
        displayOrder: 2
      },
      {
        name: "Industrial Security Guards",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Disciplined security forces for manufacturing units, factories, steel plants, and heavy industrial facilities.",
        bestFor: ["Manufacturing Plants", "Factories", "Steel Mills", "Construction Sites"],
        keyFeatures: ["24/7 Gate Patrol", "Material Gate Pass Checking", "Safety & Fire Trained", "Shift Patrol Rotation"],
        imagePath: "/images/services/security-guards/industrial-security-guards/img-a76ntaw8.jpg",
        status: "active",
        displayOrder: 3
      },
      {
        name: "Corporate Office Security",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Uniformed security personnel providing front desk lobby management, badge verification, and executive safety.",
        bestFor: ["Corporate Towers", "IT Parks", "Financial Hubs", "Executive Offices"],
        keyFeatures: ["Lobby Visitor Management", "Badge & Pass Checking", "CCTV Monitoring Assist", "Confidential Protocol"],
        imagePath: "/images/services/security-guards/corporate-office-security/img-jhz9bsil.jpg",
        status: "active",
        displayOrder: 4
      },
      {
        name: "Hotel Security",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Discreet and professional security staff providing 24/7 lobby supervision, valet oversight, and guest safety.",
        bestFor: ["Luxury Hotels", "Resorts", "Boutique Hotels", "Event Banquets"],
        keyFeatures: ["Guest Safety Patrol", "Luggage & Valet Oversight", "Emergency Evacuation", "Discreet Monitoring"],
        imagePath: "/images/services/security-guards/hotel-security/img-2lpwrhv1.jpg",
        status: "active",
        displayOrder: 5
      },
      {
        name: "Hospital Security",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Specialized security personnel trained for healthcare facilities, emergency ward management, and patient safety.",
        bestFor: ["Hospitals", "Medical Clinics", "Diagnostic Centers"],
        keyFeatures: ["Emergency Room Security", "Visitor Pass Control", "Patient Safety Patrol", "De-escalation Training"],
        imagePath: "/images/services/security-guards/hospital-security/img-0hi8skoy.jpg",
        status: "active",
        displayOrder: 6
      },
      {
        name: "School & College Security",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Campus security officers focused on student safety, gate monitoring, and visitor background checks.",
        bestFor: ["Schools", "Colleges", "Universities", "Educational Institutes"],
        keyFeatures: ["Student Gate Safety", "Visitor Background Check", "Campus Patrol", "Emergency Evacuation"],
        imagePath: "/images/services/security-guards/school-college-security/img-0c4i3bfk.jpg",
        status: "active",
        displayOrder: 7
      },
      {
        name: "Warehouse Security",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Logistics and warehouse security officers trained in inventory protection, loading dock checks, and perimeter surveillance.",
        bestFor: ["Logistics Parks", "Warehouses", "Fulfillment Centers"],
        keyFeatures: ["Loading Dock Inspection", "Inventory Theft Control", "Seal Verification", "Night Perimeter Check"],
        imagePath: "/images/services/security-guards/warehouse-security/img-pvqpmuq0.jpg",
        status: "active",
        displayOrder: 8
      },
      {
        name: "Event Security",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Tactical event security bouncers and crowd management supervisors for exhibitions, concerts, and public gatherings.",
        bestFor: ["Concerts & Exhibitions", "Sports Events", "Public Gatherings"],
        keyFeatures: ["Crowd Control", "Ticket & Metal Detector Sweep", "Bouncer Patrol", "Emergency Evacuation"],
        imagePath: "/images/services/security-guards/event-security/img-53jld5id.jpg",
        status: "active",
        displayOrder: 9
      },
      {
        name: "VIP Protection (Where Applicable)",
        category: "Security Guard Services",
        serviceSlug: "security-guard-services",
        description: "Personal protection officers and armed escorts providing executive protection for dignitaries, executives, and VIP guests.",
        bestFor: ["Executives", "Dignitaries", "Business Leaders", "VIP Guests"],
        keyFeatures: ["Executive Protection", "Secure Escort Services", "Threat Risk Assessment", "Confidential Operations"],
        imagePath: "/images/services/security-guards/vip-protection/img-6095veu5.jpg",
        status: "active",
        displayOrder: 10
      },

      // 8 CCTV Camera Devices
      {
        name: "Dome Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Ideal for indoor surveillance where aesthetics and wide-angle coverage are important.",
        bestFor: ["Offices", "Retail Stores", "Hospitals", "Schools", "Hotels"],
        keyFeatures: ["Compact Design", "Vandal Resistant", "Infrared Night Vision", "Wide Viewing Angle", "Indoor & Outdoor Models"],
        imagePath: "/images/cctv/dome/VP26P-T89uJ-K4JLfuW_mCGOQrehf1rTqHCz-e2Ljrz9UIAVV-9CwaTIQ05Vyji3sHDITRGOT28HEbJolIJ4vxOc3XKNS2_ieTsd_ldZsFmy7S1e2i6z9JFD7CMT0Ptxb4PLN5SO9c0LMySMybvgzvYgPg2xSp16lX5LEPaujV7xkX-xJEwe5PBxzNHCZ9RJ.jpg",
        status: "active",
        displayOrder: 11
      },
      {
        name: "Bullet Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Designed for long-range outdoor surveillance with high-visibility deterrence.",
        bestFor: ["Parking Areas", "Building Perimeters", "Warehouses", "Industrial Facilities"],
        keyFeatures: ["Long-Distance Monitoring", "Weatherproof Housing", "HD Recording", "Infrared Night Vision", "Easy Wall Mounting"],
        imagePath: "/images/cctv/bullet/5TenuMzbyrJ5zN0UlqJ7rRLKXQYhnM_6tlAF-812He89l4ewjQtYvQz0U2gZmtzIoM6DEV_Gaeq8nlCT8uvXj5FAljDUZ-rQ5YkGEwo6ebOoaRxWLaQcNQ93W5_gFrc0emAiera7qRjYWAA2QgLExxjNhqQAc2YUDddtb9G4wvWKnSd4kuK8n5sQOwy2MUIv.jpg",
        status: "active",
        displayOrder: 12
      },
      {
        name: "PTZ Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Monitor large areas with remote control, motorized optical zoom, and intelligent tracking.",
        bestFor: ["Airports", "Stadiums", "Industrial Plants", "Large Campuses"],
        keyFeatures: ["360° Rotation", "Optical Zoom", "Auto Tracking", "Remote Operation", "Large Area Coverage"],
        imagePath: "/images/cctv/ptz/3VZFzDiO72AoHwakoDLGNvHFkLVUgiVmdQducNVhp2laXGUxxuEihWeWCa-dDMGUnVT_4KzH-nq6GoEdOUfhEhtTd0Uw1GJt9KAX4BozyvPncmgmz6YE_TzQrfjNbxXV-HT9CTiX5wZ6GKdIAAwg0fmn0PHaX2GytRGANTYHlXqYsuhCuCNXrSxhmb.jpg",
        status: "active",
        displayOrder: 13
      },
      {
        name: "Turret Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "A versatile option for homes and businesses with flexible installation angles and zero IR reflection.",
        bestFor: ["Homes", "Shops", "Offices"],
        keyFeatures: ["Easy Angle Adjustment", "High Image Quality", "Low IR Reflection", "Compact Design"],
        imagePath: "/images/cctv/turret/SvQC9SamokYa7sTS8d57xE6RX4is0AptxJ0pWwb0wOzmoVwoAI2LVJpHdmDKkU2PGaOk88CNx-qw6KQPH8VTuY-kMrIJhqGAU8LhseFuWWAbCREn3WIqZtlSe09DraRjrzIdCUzG17iu3Vahl1EPzytuUgGX27CgJCnglQ5hPIwkQcXNJmB37jTOJZ.jpg",
        status: "active",
        displayOrder: 14
      },
      {
        name: "Fisheye Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Capture 180° to 360° panoramic views with a single camera and digital dewarping.",
        bestFor: ["Shopping Malls", "Conference Rooms", "Banks"],
        keyFeatures: ["180°–360° Coverage", "Panoramic View", "Digital Dewarping"],
        imagePath: "/images/cctv/fisheye/TS5VM_mHNYm7bXe2lP9oy6g7-5BofDkiQ5COLXuSLCnY4JYiRnmbwRmN26mSEd3Bjuqj9cWWIEP25sIF3zzyDz3Ya9jBW4Dt1YY1WYlHtUk5Rc9rcPrfhx0riX-XOiUo44q49C74HTi7xGLBykUjQ-7E7KN3G-7Y28IdCcePmkDYmg_Zd2dIEmtV5KaqPgR4.jpg",
        status: "active",
        displayOrder: 15
      },
      {
        name: "Box Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Professional-grade cameras for high-security environments requiring custom specialized optics.",
        bestFor: ["Banks", "Warehouses", "Critical Infrastructure"],
        keyFeatures: ["Long-Distance Monitoring", "Interchangeable Lens", "High Performance"],
        imagePath: "/images/cctv/box/BKOHaLctffpqc4yN-yDyQsAKOsvFpgeccn3PFGqtjvU7T8bMZRY2-NDm241havjANPwiSa0GKhHPX6EKvdqBR5YIhTS2pbBCyHYdseavlJFJ8ZlKaTFyQ6PoGzIkBERboX5Tc5xLKVvSTc9CUdPdR6Axflm1GEdBrHY18FmPoXjXqAlN3rtaJD91xXzfiJ6-.jpg",
        status: "active",
        displayOrder: 16
      },
      {
        name: "Wireless Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Simple cable-free installation with direct Wi-Fi connectivity and mobile streaming.",
        bestFor: ["Homes", "Small Offices"],
        keyFeatures: ["Wi-Fi Connectivity", "Mobile Monitoring", "Cloud Recording", "Easy Installation"],
        imagePath: "/images/cctv/wireless/Brvszyepf42s5qZOHOAHslHNpglvdvo9PMoYRQhxYT33PpW20NMHVgGaGTBSKOUtKz58ty5dNdZuQJHOaaKklJk5X1WJjqsgARAmf-haRLtNk5gS52RdDpS7coUbcbhPucAXkXjwgrD6jYeBjgqv2LydGogqPtVIPraHi0WtD454D1rY3I_nUnYkiqYmLpx-.jpg",
        status: "active",
        displayOrder: 17
      },
      {
        name: "IP Cameras",
        category: "CCTV Surveillance",
        serviceSlug: "cctv-installation",
        description: "Network-based PoE surveillance streaming 4K video with integrated AI analytics.",
        bestFor: ["Corporate Offices", "Commercial Buildings", "Smart Campuses"],
        keyFeatures: ["High Resolution", "Remote Monitoring", "PoE Support", "AI Integration"],
        imagePath: "/images/cctv/ip/i3sCq33JbdmOZ_WKVY_ZVmVvM_KdFr5drwXpbzJrhreC1D7inYnwmW6wDB73XHdNCpRthAn-5v8NTBYpbO4KmXOyohfbeDADjURRxU9VSBVhsF42pxC83jIpYdsyXuiGscc2BqNi751r1zHTL697vWtU5VnYnU2s2bU-9ZMbi6evj0zghqBocsmQxnzYtZHR.jpg",
        status: "active",
        displayOrder: 18
      },

      // 14 Fire Safety Equipment
      {
        name: "Fire Alarm Control Panel",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "The central brain of the fire protection system, receiving signals from sensors and activating alarms, sprinklers, and emergency notifications.",
        bestFor: ["Commercial Towers", "Hospitals", "Industrial Facilities", "Hotels"],
        keyFeatures: ["Addressable & Conventional", "Battery Backup", "LCD Display", "Zone Monitoring", "Emergency Dialer Integration"],
        imagePath: "/images/services/fire-alarm/fire-alarm-control-panel-facp/img-41gyjfrk.jpg",
        status: "active",
        displayOrder: 19
      },
      {
        name: "Smoke Detectors",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Optical and ionization sensors that detect combustion particles at the earliest stage to trigger pre-alarm notifications.",
        bestFor: ["Offices", "Bedrooms", "Server Rooms", "Corridors", "Libraries"],
        keyFeatures: ["Photoelectric Optics", "360° Smoke Entry", "Dust Resistance", "Built-in LED Indicator", "Low Power Consumption"],
        imagePath: "/images/services/fire-alarm/smoke-detector/img-4soj8cqs.jpg",
        status: "active",
        displayOrder: 20
      },
      {
        name: "Heat Detectors",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Fixed temperature and rate-of-rise thermal sensors ideal for dusty or smoky environments where smoke detectors might false alarm.",
        bestFor: ["Kitchens", "Boiler Rooms", "Garages", "Manufacturing Plants"],
        keyFeatures: ["Rate-of-Rise Sensing", "Fixed Temp (57°C - 90°C)", "High Humidity Tolerant", "Vandal Resistant"],
        imagePath: "/images/services/fire-alarm/heat-detector/img-empzt0kh.jpg",
        status: "active",
        displayOrder: 21
      },
      {
        name: "Flame Detectors",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Advanced optical sensors responding to infrared (IR) or ultraviolet (UV) radiation emitted by open flames within milliseconds.",
        bestFor: ["Oil & Gas Refineries", "Chemical Plants", "Fuel Depots", "Aircraft Hangars"],
        keyFeatures: ["UV/IR Optical Dual Sensor", "Millisecond Trigger Time", "Solar Radiation Blind", "Explosion-Proof Housing"],
        imagePath: "/images/services/fire-alarm/flame-detector/img-0z408d2t.jpg",
        status: "active",
        displayOrder: 22
      },
      {
        name: "Beam Smoke Detector",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Beam smoke detectors project an infrared beam across large open spaces. Smoke interrupting the beam triggers the fire alarm system.",
        bestFor: ["Warehouses", "Atriums", "Shopping Malls", "Aircraft Hangars", "Auditoriums"],
        keyFeatures: ["Long Detection Range", "Ideal for High Ceilings", "Low Maintenance", "Accurate Detection"],
        imagePath: "/images/services/fire-alarm/beam-smoke-detector/img-66ftinii.jpg",
        status: "active",
        displayOrder: 23
      },
      {
        name: "Fire Alarm Bell",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Fire alarm bells provide a traditional audible warning when the fire alarm system is activated.",
        bestFor: ["School Corridors", "Commercial Buildings", "Industrial Warehouses", "Residential Buildings"],
        keyFeatures: ["High Sound Output", "Durable Metal Construction", "Reliable Operation"],
        imagePath: "/images/services/fire-alarm/fire-alarm-bell/img-47awgded.jpg",
        status: "active",
        displayOrder: 24
      },
      {
        name: "Fire Alarm Sounder & Strobe",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Sounders emit loud alarm tones while strobe lights provide visual warnings, ensuring that all occupants are alerted during emergencies.",
        bestFor: ["Noisy Factories", "Hospitals", "Public Venues", "Shopping Centers", "Commercial Buildings"],
        keyFeatures: ["Loud Audible Alarm", "Bright LED Flash", "Indoor & Outdoor Models", "Low Power Consumption"],
        imagePath: "/images/services/fire-alarm/fire-alarm-sounder-strobe/img-8hrwvuu6.jpg",
        status: "active",
        displayOrder: 25
      },
      {
        name: "Emergency Exit Signs",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Illuminated photoluminescent and battery-backed direction signs marking designated egress paths during power outages.",
        bestFor: ["Stairways", "Corridors", "Fire Doors", "Basement Parking"],
        keyFeatures: ["LED Edge-Lit", "3-Hour Battery Backup", "Double-Sided Directional", "Energy Efficient"],
        imagePath: "/images/services/fire-alarm/emergency-exit-sign/img-0aryxuoh.jpg",
        status: "active",
        displayOrder: 26
      },
      {
        name: "Emergency Lights",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Automatic battery-operated backup luminaires providing essential pathway lighting when main electrical power fails.",
        bestFor: ["Escape Routes", "Electrical Rooms", "Control Centers", "Hallways"],
        keyFeatures: ["Auto-Power Transfer", "Dual Adjustable Heads", "Long-Life Lithium Battery", "Self-Testing Feature"],
        imagePath: "/images/services/fire-alarm/emergency-light/img-3i14ar2g.jpg",
        status: "active",
        displayOrder: 27
      },
      {
        name: "Fire Extinguishers",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Portable first-response fire suppression cylinders for Class A, B, C, D, and Electrical fire hazards.",
        bestFor: ["Offices", "Vehicles", "Kitchens", "Electrical Panels"],
        keyFeatures: ["ABC Dry Powder / CO2 / Clean Agent", "Pressure Gauge", "Discharge Hose", "Wall Mounting Bracket"],
        imagePath: "/images/services/fire-alarm/fire-extinguisher/img-cd8qwitk.jpg",
        status: "active",
        displayOrder: 28
      },
      {
        name: "Fire Sprinkler System",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Automated heat-activated water distribution piping system suppressing fires directly over the source.",
        bestFor: ["High-Rise Buildings", "Warehouses", "Shopping Malls", "Hotels"],
        keyFeatures: ["Glass Bulb Sprinkler Heads", "Wet / Dry Pipe Systems", "Flow Switches", "Alarm Valve Assembly"],
        imagePath: "/images/services/fire-alarm/fire-sprinkler-system/img-ehndt9ph.jpg",
        status: "active",
        displayOrder: 29
      },
      {
        name: "Fire Hydrant System",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Heavy-duty pressurized water ring network and outdoor pillar hydrants supplying water for municipal fire brigades.",
        bestFor: ["Industrial Parks", "Commercial Complexes", "Factories", "Residential Townships"],
        keyFeatures: ["High Pressure Water Mains", "Landed Valves", "Canvas Hose Pipe & Nozzles", "Diesel & Electric Fire Pumps"],
        imagePath: "/images/services/fire-alarm/fire-hydrant-system/img-2ya0vqyi.jpg",
        status: "active",
        displayOrder: 30
      },
      {
        name: "Hose Reel System",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "First-aid manual firefighting water hose reels permanently connected to pressurized water supply.",
        bestFor: ["Building Landing Areas", "Commercial Corridors", "Schools"],
        keyFeatures: ["30m Rubber Hose Pipe", "Shut-Off Jet Nozzle", "Swivel Drum Mounting", "Red Polyester Coating"],
        imagePath: "/images/services/fire-alarm/fire-hose-reel/img-ac9cs52h.jpg",
        status: "active",
        displayOrder: 31
      },
      {
        name: "FM-200 System",
        category: "Fire Safety",
        serviceSlug: "fire-alarm-system",
        description: "Waterless gaseous fire suppression system discharging within 10 seconds to extinguish fires without damaging electronics.",
        bestFor: ["Data Centers", "Server Rooms", "Telecommunication Hubs", "Control Rooms"],
        keyFeatures: ["Zero Ozone Depletion", "Fast 10s Discharge", "Electrically Non-Conductive", "No Residue Cleanup"],
        imagePath: "/images/services/fire-alarm/fm-200-fire-suppression-system/img-8emira6q.jpg",
        status: "active",
        displayOrder: 32
      },

      // 14 Access Control Hardware Categories
      {
        name: "Biometric Fingerprint Reader",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "A biometric fingerprint reader authenticates users using their unique fingerprints, providing secure and fast access to restricted areas.",
        bestFor: ["Corporate Offices", "Server Rooms", "Executive Suites", "Research Labs"],
        keyFeatures: ["Fingerprint Authentication", "Fast Recognition", "High Security", "Attendance Integration", "Access Logs", "Touch Sensor Technology"],
        imagePath: "/images/services/access-control/biometric-fingerprint-reader/img-7yp7vslh.jpg",
        status: "active",
        displayOrder: 33
      },
      {
        name: "Facial Recognition Terminal",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "A facial recognition terminal uses AI-powered facial recognition technology to grant secure, contactless access.",
        bestFor: ["Hospitals", "Corporate Lobbies", "High-Security Gates", "Factories"],
        keyFeatures: ["Contactless Authentication", "AI Face Recognition", "Fast Verification", "Mask Detection Support", "Visitor Management"],
        imagePath: "/images/services/access-control/facial-recognition-terminal/img-8gta2svs.jpg",
        status: "active",
        displayOrder: 34
      },
      {
        name: "RFID Card Reader",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "RFID card readers allow authorized users to unlock doors using RFID cards or key fobs.",
        bestFor: ["Commercial Buildings", "Hotels", "Residential Towers", "Staff Entrances"],
        keyFeatures: ["Contactless Card Access", "Fast Authentication", "Multiple Card Support", "Durable Design", "Secure Entry Logs"],
        imagePath: "/images/services/access-control/rfid-card-reader/img-7pp9r2b0.jpg",
        status: "active",
        displayOrder: 35
      },
      {
        name: "Keypad Access Control",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "A keypad access control system grants entry using a secure PIN code without requiring physical keys.",
        bestFor: ["Store Rooms", "Utility Areas", "Residential Gates", "Server Racks"],
        keyFeatures: ["PIN Authentication", "Password Protection", "Multiple User Codes", "Indoor & Outdoor Models", "Easy Installation"],
        imagePath: "/images/services/access-control/keypad-access-control/img-mrjk6rat.jpg",
        status: "active",
        displayOrder: 36
      },
      {
        name: "Smart Door Lock",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "A smart door lock combines fingerprint, PIN, RFID, and mobile app access for enhanced security.",
        bestFor: ["Private Offices", "Luxury Apartments", "Boutique Hotels", "Conference Rooms"],
        keyFeatures: ["Fingerprint Unlock", "PIN Code Access", "Mobile App Control", "RFID Card Support", "Emergency Key Backup"],
        imagePath: "/images/services/access-control/smart-door-lock/img-hhd2fcx6.jpg",
        status: "active",
        displayOrder: 37
      },
      {
        name: "Electromagnetic Lock (Maglock)",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "An electromagnetic lock secures doors using a powerful magnetic force and integrates with access control systems.",
        bestFor: ["Glass Doors", "Emergency Exit Doors", "High-Traffic Gates", "Office Main Entrances"],
        keyFeatures: ["High Holding Force", "Silent Operation", "Automatic Locking", "Long Service Life", "Easy Integration"],
        imagePath: "/images/services/access-control/electromagnetic-lock-maglock/img-sya1h93d.jpg",
        status: "active",
        displayOrder: 38
      },
      {
        name: "Electric Bolt Lock",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "An electric bolt lock provides secure locking by automatically extending or retracting a steel bolt.",
        bestFor: ["Double-Swing Doors", "Wooden Doors", "Heavy Metal Doors", "Secure Vaults"],
        keyFeatures: ["Automatic Locking", "Stainless Steel Bolt", "Fail-Safe / Fail-Secure Options", "Low Power Consumption"],
        imagePath: "/images/services/access-control/electric-bolt-lock/img-bxxbrn4m.jpg",
        status: "active",
        displayOrder: 39
      },
      {
        name: "Electric Strike Lock",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "An electric strike lock works with existing door latches to allow remote unlocking through an access control system.",
        bestFor: ["Office Doors", "Intercom Systems", "Commercial Suites", "Reception Entrances"],
        keyFeatures: ["Remote Door Release", "Easy Installation", "Secure Access", "Compatible with Existing Locks"],
        imagePath: "/images/services/access-control/electric-strike-lock/img-bpvjxswg.jpg",
        status: "active",
        displayOrder: 40
      },
      {
        name: "Access Control Controller",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "The access control controller is the central processing unit that manages readers, locks, and user permissions.",
        bestFor: ["Multi-Door Networks", "Enterprise Buildings", "Industrial Facilities", "Campus Infrastructure"],
        keyFeatures: ["Multi-Door Management", "User Database", "Event Logging", "Remote Monitoring", "Network Connectivity"],
        imagePath: "/images/services/access-control/access-control-controller/img-1uy66gux.jpg",
        status: "active",
        displayOrder: 41
      },
      {
        name: "Exit Push Button",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "An exit push button allows occupants to unlock doors safely when exiting a secured area.",
        bestFor: ["Interior Doors", "Reception Exits", "Staff Exits", "Office Corridors"],
        keyFeatures: ["One-Touch Exit", "Durable Design", "Easy Installation", "LED Indicator"],
        imagePath: "/images/services/access-control/exit-push-button/img-425b0u2h.jpg",
        status: "active",
        displayOrder: 42
      },
      {
        name: "Exit Motion Sensor",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "An exit motion sensor automatically unlocks doors when someone approaches from inside.",
        bestFor: ["High-Traffic Corridors", "Glass Door Entrances", "Hospital Hallways", "Cleanrooms"],
        keyFeatures: ["Hands-Free Operation", "Motion Detection", "Automatic Door Release", "Adjustable Detection Range"],
        imagePath: "/images/services/access-control/exit-motion-sensor/img-j8g3i1ou.jpg",
        status: "active",
        displayOrder: 43
      },
      {
        name: "Door Exit Release Button",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "A break-glass emergency release unit immediately unlocks access-controlled doors during emergencies.",
        bestFor: ["Emergency Exits", "Fire Escape Routes", "Stairwell Doors", "Hazardous Areas"],
        keyFeatures: ["Emergency Door Release", "Break Glass Design", "High Reliability", "Safety Compliance"],
        imagePath: "/images/services/access-control/door-exit-release-button/img-4tsn27pa.jpg",
        status: "active",
        displayOrder: 44
      },
      {
        name: "Boom Barrier",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "Boom barriers control vehicle entry and exit in parking lots, residential complexes, and industrial premises.",
        bestFor: ["Gated Communities", "Toll Plazas", "Commercial Parking", "Factory Gates"],
        keyFeatures: ["Automatic Vehicle Control", "RFID Integration", "Fast Opening", "Weather Resistant", "Heavy Duty Motor"],
        imagePath: "/images/services/access-control/boom-barrier/img-azeb8r5k.jpg",
        status: "active",
        displayOrder: 45
      },
      {
        name: "Video Door Phone (VDP)",
        category: "Access Control",
        serviceSlug: "access-control-system",
        description: "A video door phone enables audio and video communication with visitors before granting access.",
        bestFor: ["Villas", "Apartments", "Corporate Reception", "Executive Offices"],
        keyFeatures: ["HD Video Calling", "Two-Way Audio", "Remote Door Unlock", "Mobile App Support", "Night Vision"],
        imagePath: "/images/services/access-control/video-door-phone-vdp/img-0xtgtvic.jpg",
        status: "active",
        displayOrder: 46
      },

      // 16 PA System Equipment Categories
      {
        name: "PA System Amplifier",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "The amplifier is the heart of a Public Address System. It amplifies audio signals from microphones and media sources, ensuring clear sound distribution across all connected speakers.",
        bestFor: ["Commercial Towers", "Schools & Colleges", "Auditoriums", "Factories"],
        keyFeatures: ["High Power Output", "Multiple Audio Inputs", "Volume Control", "Zone Control", "Rack Mount Design", "Overload Protection"],
        imagePath: "/images/services/pa-system/pa-system-amplifier/img-43bln0p3.jpg",
        status: "active",
        displayOrder: 47
      },
      {
        name: "Ceiling Speaker",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Ceiling speakers provide clear and evenly distributed sound for announcements and background music in offices, schools, hospitals, and commercial buildings.",
        bestFor: ["Offices", "Corridors", "Hospitals", "Shopping Malls"],
        keyFeatures: ["Clear Audio Quality", "Flush Mount Design", "Wide Sound Coverage", "Easy Installation", "Low Power Consumption"],
        imagePath: "/images/services/pa-system/ceiling-speaker/img-avkv7ivs.jpg",
        status: "active",
        displayOrder: 48
      },
      {
        name: "Wall Mount Speaker",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Wall-mounted speakers are ideal for indoor public announcement systems where clear voice communication is required.",
        bestFor: ["Conference Rooms", "Classrooms", "Retail Stores", "Lobbies"],
        keyFeatures: ["Compact Design", "High Speech Clarity", "Wide Coverage", "Durable Construction"],
        imagePath: "/images/services/pa-system/wall-mount-speaker/img-acyt9i6l.jpg",
        status: "active",
        displayOrder: 49
      },
      {
        name: "Horn Speaker",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Horn speakers deliver loud and clear audio over long distances, making them ideal for factories, warehouses, outdoor areas, and industrial sites.",
        bestFor: ["Warehouses", "Factories", "Outdoor Parking", "Sports Stadiums"],
        keyFeatures: ["High Sound Output", "Weatherproof Design", "Long-Distance Coverage", "Outdoor Installation"],
        imagePath: "/images/services/pa-system/horn-speaker/img-8g9t83g3.jpg",
        status: "active",
        displayOrder: 50
      },
      {
        name: "Column Speaker",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Column speakers provide excellent speech intelligibility in auditoriums, conference halls, churches, and large indoor spaces.",
        bestFor: ["Auditoriums", "Churches", "Conference Halls", "Exhibition Centers"],
        keyFeatures: ["Wide Sound Dispersion", "Elegant Design", "Clear Voice Projection", "Indoor Applications"],
        imagePath: "/images/services/pa-system/column-speaker/img-izc93tf7.jpg",
        status: "active",
        displayOrder: 51
      },
      {
        name: "Paging Microphone",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Paging microphones allow operators to make live announcements to selected zones or the entire building.",
        bestFor: ["Reception Desks", "Control Rooms", "Security Cabins", "Administration Offices"],
        keyFeatures: ["Push-to-Talk Button", "Zone Selection", "Noise Reduction", "Flexible Gooseneck Design"],
        imagePath: "/images/services/pa-system/paging-microphone/img-7bgfz11d.jpg",
        status: "active",
        displayOrder: 52
      },
      {
        name: "Wireless Microphone",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Wireless microphones provide mobility and convenience for presentations, events, classrooms, and conferences.",
        bestFor: ["Events & Stage", "Seminars", "Classrooms", "Boardrooms"],
        keyFeatures: ["Wireless Operation", "Long Battery Life", "High Audio Quality", "Easy Connectivity"],
        imagePath: "/images/services/pa-system/wireless-microphone/img-4gftnrvq.jpg",
        status: "active",
        displayOrder: 53
      },
      {
        name: "Audio Mixer",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "An audio mixer combines multiple audio sources such as microphones, music players, and computers, allowing operators to control sound levels efficiently.",
        bestFor: ["Event Venues", "Recording Studios", "Auditoriums", "Broadcasting Booths"],
        keyFeatures: ["Multiple Input Channels", "Independent Volume Control", "Equalizer", "Audio Effects Support"],
        imagePath: "/images/services/pa-system/audio-mixer/img-3j0ngnza.jpg",
        status: "active",
        displayOrder: 54
      },
      {
        name: "Zone Controller",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Zone controllers enable announcements to specific areas without broadcasting throughout the entire building.",
        bestFor: ["Multi-Story Offices", "Hospitals", "Airports", "Shopping Malls"],
        keyFeatures: ["Multi-Zone Control", "Independent Volume Adjustment", "Easy Operation", "Centralized Management"],
        imagePath: "/images/services/pa-system/zone-controller/img-51dztxol.jpg",
        status: "active",
        displayOrder: 55
      },
      {
        name: "PA System Controller",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "The PA system controller manages all connected audio devices and distributes announcements across different zones.",
        bestFor: ["Enterprise Facilities", "Commercial Complexes", "Universities", "Industrial Parks"],
        keyFeatures: ["Centralized Control", "Zone Management", "Emergency Broadcasting", "Audio Routing"],
        imagePath: "/images/services/pa-system/pa-system-controller/img-kwugwbmc.jpg",
        status: "active",
        displayOrder: 56
      },
      {
        name: "Network Audio Controller",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Network audio controllers allow centralized audio management over IP networks, making them ideal for large campuses and enterprise facilities.",
        bestFor: ["Smart Campuses", "Multi-Building Facilities", "Airports", "Railway Stations"],
        keyFeatures: ["IP-Based Audio Distribution", "Remote Management", "Multi-Building Support", "High Reliability"],
        imagePath: "/images/services/pa-system/network-audio-controller/img-hl0gt0ig.jpg",
        status: "active",
        displayOrder: 57
      },
      {
        name: "Rack Cabinet",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "A rack cabinet houses amplifiers, controllers, mixers, power supplies, and other PA system equipment in a secure and organized manner.",
        bestFor: ["Server Rooms", "Control Rooms", "AV Equipment Hubs"],
        keyFeatures: ["Equipment Protection", "Cable Management", "Ventilation", "Lockable Design"],
        imagePath: "/images/services/pa-system/rack-cabinet/img-2yjii6qa.jpg",
        status: "active",
        displayOrder: 58
      },
      {
        name: "Power Supply Unit (PSU)",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "The power supply unit provides stable power to all PA system components for uninterrupted operation.",
        bestFor: ["Continuous 24/7 Audio", "Emergency Evacuation Hubs", "Industrial Racks"],
        keyFeatures: ["Stable Power Output", "Surge Protection", "High Efficiency", "Reliable Performance"],
        imagePath: "/images/services/pa-system/power-supply-unit-psu/img-1wwq7yib.jpg",
        status: "active",
        displayOrder: 59
      },
      {
        name: "Emergency Voice Evacuation System (EVAC)",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Voice evacuation systems broadcast emergency instructions during fire alarms and other emergencies, helping occupants evacuate safely.",
        bestFor: ["High-Rise Towers", "Hospitals", "Public Venues", "Airports"],
        keyFeatures: ["Emergency Voice Messages", "Fire Alarm Integration", "Automatic Announcements", "Multi-Zone Broadcasting"],
        imagePath: "/images/services/pa-system/emergency-voice-evacuation-system-evac/img-1qhyd12o.jpg",
        status: "active",
        displayOrder: 60
      },
      {
        name: "Network IP Speaker",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "IP speakers receive audio over an Ethernet network, eliminating the need for traditional audio cabling and enabling scalable installations.",
        bestFor: ["Smart Offices", "IP-Based Infrastructure", "Logistics Hubs"],
        keyFeatures: ["Ethernet Connectivity", "Remote Configuration", "Crystal-Clear Audio", "Scalable Deployment"],
        imagePath: "/images/services/pa-system/network-ip-speaker/img-fdjhmlum.jpg",
        status: "active",
        displayOrder: 61
      },
      {
        name: "Volume Controller",
        category: "PA System",
        serviceSlug: "public-address-system",
        description: "Volume controllers allow users to adjust speaker output levels in individual rooms or zones without affecting the rest of the system.",
        bestFor: ["Executive Offices", "Conference Rooms", "Hotel Rooms", "Classrooms"],
        keyFeatures: ["Local Volume Adjustment", "Wall-Mounted Design", "Easy Operation", "Zone Control"],
        imagePath: "/images/services/pa-system/volume-controller/img-cnc7w59b.jpg",
        status: "active",
        displayOrder: 62
      }
    ]);
    console.log("✔ Service Categories Catalog Populated with All 62 Items.");

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
