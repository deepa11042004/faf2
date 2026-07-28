import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Family Anchor Facilities Pvt. Ltd. - API Documentation",
      version: "1.0.0",
      description: "Production-Ready RESTful API Backend for Family Anchor Facilities Corporate Security Services Website.",
      contact: {
        name: "Family Anchor Facilities Pvt. Ltd.",
        email: "support@familyanchor.in",
        url: "https://familyanchor.in"
      }
    },
    servers: [
      {
        url: "http://localhost:5001/api/v1",
        description: "Development Server"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter JWT Bearer token to access protected Admin endpoints."
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    tags: [
      { name: "Authentication", description: "Admin Authentication & Password Management APIs" },
      { name: "Dashboard", description: "Admin Analytics & Metrics APIs" },
      { name: "Services", description: "Security Services Management APIs" },
      { name: "Projects", description: "Security Projects Portfolio APIs" },
      { name: "Gallery", description: "Media & Photo Gallery APIs" },
      { name: "Career Jobs", description: "Recruitment & Job Openings APIs" },
      { name: "Career Applications", description: "Job Applicant Submissions APIs" },
      { name: "Contact", description: "Inbound Client Enquiries & Contact APIs" },
      { name: "Settings", description: "Website Branding & Configuration APIs" }
    ]
  },
  apis: ["./src/routes/*.js"]
};

export const swaggerSpec = swaggerJsDoc(options);
