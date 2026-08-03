import multer from "multer";
import path from "path";
import fs from "fs";

// Create upload directory helper
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/misc";

    if (req.baseUrl.includes("services")) {
      folder = "public/uploads/services";
    } else if (req.baseUrl.includes("projects")) {
      folder = "public/uploads/projects";
    } else if (req.baseUrl.includes("gallery")) {
      folder = "public/uploads/gallery";
    } else if (req.baseUrl.includes("team")) {
      folder = "public/uploads/team";
    } else if (req.baseUrl.includes("devices")) {
      folder = "public/uploads/devices";
    } else if (req.baseUrl.includes("settings")) {
      folder = "public/uploads/logos";
    } else if (req.baseUrl.includes("applications")) {
      folder = "public/uploads/resumes";
    } else {
      folder = "public/uploads/misc";
    }

    ensureDirectoryExists(folder);
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedImageTypes = /jpeg|jpg|png|webp/;
  const allowedDocTypes = /pdf|doc|docx/;

  const extname = path.extname(file.originalname).toLowerCase().replace(".", "");
  const mimetype = file.mimetype;

  if (file.fieldname === "resume") {
    if (allowedDocTypes.test(extname) || mimetype.includes("pdf") || mimetype.includes("word")) {
      return cb(null, true);
    }
    return cb(new Error("Only PDF, DOC, and DOCX files are allowed for resumes!"));
  }

  if (allowedImageTypes.test(extname) && mimetype.includes("image")) {
    return cb(null, true);
  }

  cb(new Error("Only JPG, JPEG, PNG, and WebP image formats are supported!"));
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB Limit
  },
  fileFilter
});
