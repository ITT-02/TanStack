import { api } from "../../../api/axiosConfig";

const TABLE = "categorias";

export const getCategories = async () => {
  const { data } = await api.get(`/${TABLE}?select=*`);
  return data;
};

export const createCategory = async (category) => {
  const { data } = await api.post(`/${TABLE}`, category);
  return data;
};

export const updateCategory = async (id, category) => {
  const { data } = await api.patch(`/${TABLE}?id=eq.${id}`, category);
  return data;
};

export const deleteCategory = async (id) => {
  await api.delete(`/${TABLE}?id=eq.${id}`);
};