import {api} from '../../../api/axiosConfig';

// LISTAR
export const getCategories = async () => {
  const response = await api.get('/categorias?select=*');
  return response.data;
};

// CREAR
export const createCategory = async (newCategory) => {
  const response = await api.post('/categorias', newCategory, {
    params: {
      select: '*',
    },
  });

  return response.data;
};

// ACTUALIZAR
export const updateCategory = async (id, updatedCategory) => {
  const response = await api.patch(`/categorias?id=eq.${id}`, updatedCategory, {
    params: {
      select: '*',
    },
  });

  return response.data;
};

// ELIMINAR
export const deleteCategory = async (id) => {
  const response = await api.delete(`/categorias?id=eq.${id}`, {
    params: {
      select: '*',
    },
  });

  return response.data;
};