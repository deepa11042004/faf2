import { WebsiteSetting } from "../models/index.js";

export class SettingRepository {
  async getSettings() {
    let settings = await WebsiteSetting.findByPk(1);
    if (!settings) {
      settings = await WebsiteSetting.create({ id: 1 });
    }
    return settings;
  }

  async updateSettings(data) {
    let settings = await WebsiteSetting.findByPk(1);
    if (!settings) {
      return await WebsiteSetting.create({ id: 1, ...data });
    }
    return await settings.update(data);
  }
}

export default new SettingRepository();
