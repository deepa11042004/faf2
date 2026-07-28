import contactRepository from "../repositories/contactRepository.js";

export class ContactService {
  async getAllEnquiries(queryParams) {
    return await contactRepository.findAll(queryParams);
  }

  async getEnquiryById(id) {
    const enquiry = await contactRepository.findById(id);
    if (!enquiry) throw new Error("Contact enquiry not found.");
    return enquiry;
  }

  async createEnquiry(data) {
    return await contactRepository.create(data);
  }

  async updateEnquiry(id, data) {
    const updated = await contactRepository.update(id, data);
    if (!updated) throw new Error("Contact enquiry not found.");
    return updated;
  }

  async deleteEnquiry(id) {
    const deleted = await contactRepository.delete(id);
    if (!deleted) throw new Error("Contact enquiry not found.");
    return true;
  }
}

export default new ContactService();
