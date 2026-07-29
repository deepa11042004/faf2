import deviceRepository from "../repositories/deviceRepository.js";

export class DeviceService {
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

  async createDevice(data, file) {
    if (file) {
      data.imagePath = `/uploads/services/${file.filename}`;
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

    return await deviceRepository.create(data);
  }

  async updateDevice(id, data, file) {
    const device = await deviceRepository.findById(id);
    if (!device) {
      throw new Error("Device not found.");
    }

    if (file) {
      data.imagePath = `/uploads/services/${file.filename}`;
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
