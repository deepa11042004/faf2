import galleryRepository from "../repositories/galleryRepository.js";

export class GalleryService {
  async getAllGalleryItems(queryParams) {
    return await galleryRepository.findAll(queryParams);
  }

  async getGalleryItemById(id) {
    const item = await galleryRepository.findById(id);
    if (!item) throw new Error("Gallery item not found.");
    return item;
  }

  async createGalleryItem(data) {
    return await galleryRepository.create(data);
  }

  async updateGalleryItem(id, data) {
    const updated = await galleryRepository.update(id, data);
    if (!updated) throw new Error("Gallery item not found.");
    return updated;
  }

  async deleteGalleryItem(id) {
    const deleted = await galleryRepository.delete(id);
    if (!deleted) throw new Error("Gallery item not found.");
    return true;
  }
}

export default new GalleryService();
