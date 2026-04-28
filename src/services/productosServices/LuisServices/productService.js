import { api } from '../../../api/axiosConfig';

const TABLE = 'productos';

export const getProducts = async () => {
  const { data } = await api.get(`/${TABLE}?select=*,categorias(nombre)&order=id.desc`);
  return data;
};

export const createProduct = async (product) => {
  const { data } = await api.post(`/${TABLE}`, [product], { headers: { Prefer: 'return=representation' } });
  return data;
};

export const updateProduct = async (id, product) => {
  const { data } = await api.patch(`/${TABLE}?id=eq.${id}`, product, { headers: { Prefer: 'return=representation' } });
  return data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/${TABLE}?id=eq.${id}`);
  return true;
};
