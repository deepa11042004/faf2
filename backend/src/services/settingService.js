import settingRepository from "../repositories/settingRepository.js";

export class SettingService {
  async getSettings() {
    return await settingRepository.getSettings();
  }

  async updateSettings(data) {
    return await settingRepository.updateSettings(data);
  }
}

export default new SettingService();
