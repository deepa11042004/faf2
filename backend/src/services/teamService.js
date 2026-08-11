import { TeamMember } from "../models/index.js";

const getAllMembers = async (query = {}) => {
  const { page = 1, limit = 100, search, status, category } = query;
  const where = {};
  
  if (status) where.status = status;
  if (category) where.category = category;
  // simplified search without Op for now

  return await TeamMember.findAndCountAll({
    where,
    order: [["displayOrder", "ASC"], ["createdAt", "DESC"]],
    limit: parseInt(limit),
    offset: (parseInt(page) - 1) * parseInt(limit)
  });
};

const getMemberById = async (id) => {
  const member = await TeamMember.findByPk(id);
  if (!member) throw new Error("Team Member not found");
  return member;
};

const createMember = async (data) => {
  return await TeamMember.create(data);
};

const updateMember = async (id, data) => {
  const member = await getMemberById(id);
  return await member.update(data);
};

const deleteMember = async (id) => {
  const member = await getMemberById(id);
  await member.destroy();
};

export default {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
