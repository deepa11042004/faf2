import deviceRepository from "../repositories/deviceRepository.js";
import sharp from "sharp";
import fs from "fs";

export class DeviceService {
  async processAndFixImageSize(filePath) {
    if (!filePath || !fs.existsSync(filePath)) return;
    const tempPath = `${filePath}-temp-${Date.now()}`;
    try {
      await fs.promises.rename(filePath, tempPath);
      await sharp(tempPath)
        .resize(800, 600, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toFile(filePath);
      await fs.promises.unlink(tempPath).catch(() => {});
    } catch (err) {
      console.error("Failed to process image file size with sharp:", err);
      if (fs.existsSync(tempPath) && !fs.existsSync(filePath)) {
        await fs.promises.rename(tempPath, filePath).catch(() => {});
      }
    }
  }

  async getAllDevices(query) {
    return await deviceRepository.findAll(query);
  }

  async getDeviceById(id) {
    const device = await deviceRepository.findById(id);
    if (!device) {
      throw new Error("Device not found.");
    }
    return device;
  }

  /**
   * Parses the existingImages field from FormData into a clean string array.
   * Handles JSON strings, plain strings, and arrays of either.
   */
  parseImages(data) {
    let imagesList = [];
    const raw = data.existingImages || data.images;
    if (typeof raw === "string") {
      try {
        imagesList = JSON.parse(raw);
      } catch {
        imagesList = raw.split(",").map((s) => s.trim()).filter(Boolean);
      }
    } else if (Array.isArray(raw)) {
      raw.forEach((item) => {
        if (typeof item === "string") {
          try {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed)) imagesList.push(...parsed);
            else imagesList.push(item);
          } catch {
            imagesList.push(item);
          }
        }
      });
    }
    return Array.isArray(imagesList) ? imagesList : [];
  }

  async createDevice(data, filesInput) {
    if (typeof data.bestFor === "string") {
      try {
        data.bestFor = JSON.parse(data.bestFor);
      } catch {
        data.bestFor = data.bestFor.split(",").map((s) => s.trim()).filter(Boolean);
      }
    }

    if (typeof data.keyFeatures === "string") {
      try {
        data.keyFeatures = JSON.parse(data.keyFeatures);
      } catch {
        data.keyFeatures = data.keyFeatures.split(",").map((s) => s.trim()).filter(Boolean);
      }
    }

    data.images = this.parseImages(data);

    const filesList = Array.isArray(filesInput) ? filesInput : (filesInput ? [filesInput] : []);
    for (const file of filesList) {
      if (file.path) {
        await this.processAndFixImageSize(file.path);
      }
      const subFolder = file.destination?.includes("devices") ? "devices" : (file.destination?.includes("misc") ? "misc" : "devices");
      const uploadedPath = `/uploads/${subFolder}/${file.filename}`;
      if (!data.imagePath) {
        data.imagePath = uploadedPath;
      }
      if (!data.images.includes(uploadedPath)) {
        data.images.push(uploadedPath);
      }
    }

    if (data.images.length > 0 && !data.imagePath) {
      data.imagePath = data.images[0];
    }

    if (!data.displayOrder || isNaN(parseInt(data.displayOrder)) || parseInt(data.displayOrder) <= 0) {
      const maxOrder = await deviceRepository.getMaxDisplayOrder(data.category);
      data.displayOrder = maxOrder + 1;
    } else {
      data.displayOrder = parseInt(data.displayOrder);
    }

    return await deviceRepository.create(data);
  }

  async updateDevice(id, data, filesInput) {
    const device = await deviceRepository.findById(id);
    if (!device) {
      throw new Error("Device not found.");
    }

    if (typeof data.bestFor === "string") {
      try {
        data.bestFor = JSON.parse(data.bestFor);
      } catch {
        data.bestFor = data.bestFor.split(",").map((s) => s.trim()).filter(Boolean);
      }
    }

    if (typeof data.keyFeatures === "string") {
      try {
        data.keyFeatures = JSON.parse(data.keyFeatures);
      } catch {
        data.keyFeatures = data.keyFeatures.split(",").map((s) => s.trim()).filter(Boolean);
      }
    }

    data.images = this.parseImages(data);

    const filesList = Array.isArray(filesInput) ? filesInput : (filesInput ? [filesInput] : []);
    for (const file of filesList) {
      if (file.path) {
        await this.processAndFixImageSize(file.path);
      }
      const subFolder = file.destination?.includes("devices") ? "devices" : (file.destination?.includes("misc") ? "misc" : "devices");
      const uploadedPath = `/uploads/${subFolder}/${file.filename}`;
      if (!data.imagePath) {
        data.imagePath = uploadedPath;
      }
      if (!data.images.includes(uploadedPath)) {
        data.images.push(uploadedPath);
      }
    }

    if (data.images.length > 0 && !data.imagePath) {
      data.imagePath = data.images[0];
    }

    return await deviceRepository.update(id, data);
  }

  async deleteDevice(id) {
    const deleted = await deviceRepository.delete(id);
    if (!deleted) {
      throw new Error("Device not found.");
    }
    return true;
  }
}

export default new DeviceService();
