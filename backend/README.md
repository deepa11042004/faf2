# Family Anchor Facilities Pvt. Ltd. - Backend API

Production-ready Node.js & Express.js backend for **Family Anchor Facilities Pvt. Ltd.** (Corporate Security & Facility Management Solutions). Built with **Sequelize ORM**, **MySQL 8+**, **JWT Bearer Authentication**, **Swagger OpenAPI 3.0**, **Multer + Sharp image optimization**, and **Clean Service-Repository Architecture**.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Architecture](#project-architecture)
3. [Features](#features)
4. [Installation & Setup](#installation--setup)
5. [Database Setup & Seeding](#database-setup--seeding)
6. [Running the Application](#running-the-application)
7. [API Endpoints Overview](#api-endpoints-overview)
8. [Swagger Documentation](#swagger-documentation)
9. [File Upload & Sharp WebP Processing](#file-upload--sharp-webp-processing)

---

## Tech Stack
* **Runtime:** Node.js (v18+ LTS)
* **Framework:** Express.js (ES Modules)
* **Database:** MySQL 8+
* **ORM:** Sequelize ORM
* **Authentication:** JWT Bearer + bcrypt Password Hashing
* **Validation:** express-validator
* **API Documentation:** Swagger UI (OpenAPI 3.0)
* **Security:** Helmet, CORS, Express Rate Limiting
* **File Uploads & Image Processing:** Multer + Sharp (Auto-WebP conversion)
* **Logging:** Morgan

---

## Project Architecture

Clean MVC Architecture with **Service** and **Repository** patterns:

```
backend/
├── src/
│   ├── config/          # Database, Swagger, and Enums constants
│   ├── controllers/     # HTTP Request / Response handling
│   ├── docs/            # Swagger OpenAPI specifications
│   ├── middlewares/     # Auth, Upload, Validation & Global Error handling
│   ├── models/          # Sequelize Models & Relations
│   ├── repositories/    # Database queries & data abstraction layer
│   ├── routes/          # Express route declarations (/api/v1/*)
│   ├── seeders/         # Initial Admin & Settings database seeder
│   ├── services/        # Core business logic processing
│   ├── utils/           # ApiResponse, AsyncHandler, JWT & Sharp image helpers
│   ├── validators/      # express-validator request rules
│   ├── app.js           # Express app setup & middleware pipeline
│   └── server.js        # Server bootstrap & MySQL synchronization
├── public/
│   └── uploads/         # Sharp-processed WebP images & resumes
├── .env.example         # Environment template configuration
├── package.json
└── README.md
```

---

## Installation & Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Update the database credentials in `.env`:
   ```env
   PORT=5000
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=family_anchor_db
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   JWT_SECRET=faf_super_secret_jwt_key_9386126258_2026_prod
   ```

---

## Database Setup & Seeding

1. Create MySQL Database:
   ```sql
   CREATE DATABASE family_anchor_db;
   ```

2. **Run Seeder to create Admin Account and Initial Website Settings:**
   ```bash
   npm run seed
   ```

   **Default Admin Credentials:**
   * **Email:** `admin@familyanchor.in`
   * **Password:** `AdminPassword123!`

---

## Running the Application

### Development Mode (with hot-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

---

## Swagger Documentation

Full interactive OpenAPI 3.0 Swagger documentation is available at:

👉 **`http://localhost:5000/api-docs`**

---

## API Endpoints Overview

All APIs use standard response format:

```json
{
  "success": true,
  "message": "Operation successful.",
  "data": {}
}
```

### 🔐 Authentication (`/api/v1/auth`)
* `POST /api/v1/auth/login` - Admin Login
* `POST /api/v1/auth/logout` - Admin Logout (Protected)
* `POST /api/v1/auth/change-password` - Change Password (Protected)
* `POST /api/v1/auth/forgot-password` - Request Password Reset
* `POST /api/v1/auth/reset-password` - Reset Password via Token

### 📊 Admin Dashboard (`/api/v1/dashboard`)
* `GET /api/v1/dashboard` - Get System Overview Metrics & Counts (Protected)

### 🛠️ Services (`/api/v1/services`)
* `GET /api/v1/services` - List all Services (Search, Filter, Pagination)
* `GET /api/v1/services/:id` - Get Service Details
* `POST /api/v1/services` - Create Service with Image (Protected)
* `PUT /api/v1/services/:id` - Update Service (Protected)
* `DELETE /api/v1/services/:id` - Delete Service (Protected)

### 🏗️ Projects (`/api/v1/projects`)
* `GET /api/v1/projects` - List Projects (Search, Filter by Category)
* `GET /api/v1/projects/:id` - Get Project Details
* `POST /api/v1/projects` - Create Project with Multiple Images (Protected)
* `PUT /api/v1/projects/:id` - Update Project (Protected)
* `DELETE /api/v1/projects/:id` - Delete Project (Protected)

### 🖼️ Gallery (`/api/v1/gallery`)
* `GET /api/v1/gallery` - Get Media Gallery Images
* `POST /api/v1/gallery` - Add Gallery Image (Protected)
* `PUT /api/v1/gallery/:id` - Update Gallery Item (Protected)
* `DELETE /api/v1/gallery/:id` - Delete Gallery Item (Protected)

### 💼 Career Jobs (`/api/v1/jobs`)
* `GET /api/v1/jobs` - List Job Openings
* `POST /api/v1/jobs` - Create Job Opening (Protected)
* `PUT /api/v1/jobs/:id` - Update Job (Protected)
* `DELETE /api/v1/jobs/:id` - Delete Job (Protected)

### 📄 Career Applications (`/api/v1/applications`)
* `GET /api/v1/applications` - List Job Applications (Protected)
* `GET /api/v1/applications/:id` - Get Application Details (Protected)
* `POST /api/v1/applications` - Submit Resume & Application (Public)
* `DELETE /api/v1/applications/:id` - Delete Application (Protected)

### ✉️ Contact Enquiries (`/api/v1/contact`)
* `POST /api/v1/contact` - Submit Contact Enquiry (Public)
* `GET /api/v1/contact` - List All Enquiries (Protected)
* `GET /api/v1/contact/:id` - View Specific Enquiry (Protected)
* `PUT /api/v1/contact/:id` - Update Status / Admin Notes (Protected)
* `DELETE /api/v1/contact/:id` - Delete Enquiry (Protected)

### ⚙️ Website Settings (`/api/v1/settings`)
* `GET /api/v1/settings` - Fetch Public Site Settings & Branding
* `PUT /api/v1/settings` - Update Site Settings & Logos (Protected)

---

## File Upload & Sharp WebP Processing

- Image uploads (`.jpg`, `.jpeg`, `.png`, `.webp`) up to **5MB** are stored under `public/uploads/`.
- Every image uploaded is **automatically processed and converted to optimized WebP format (80% quality)** using **Sharp**.
- Resumes (`.pdf`, `.doc`, `.docx`) are stored securely under `public/uploads/resumes/`.

---

## License & Support

Developed for **Family Anchor Facilities Pvt. Ltd.**
