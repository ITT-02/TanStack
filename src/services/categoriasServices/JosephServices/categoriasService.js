import {api} from '../../../../../TanStack copy/src/api/axiosConfig';

// LISTAR
export const getCategorias = async () => {
  const response = await api.get('/categorias?select=*');
  return response.data;
};

// CREAR
export const createCategorias = async (newProduct) => {
  const response = await api.post('/categorias', newProduct, {
    params: {
      select: '*',
    },
  });

  return response.data;
};

// ACTUALIZAR
export const updateCategorias = async (id, updatedCategorias) => {
  const response = await api.patch(`/categorias?id=eq.${id}`, updatedCategorias, {
    params: {
      select: '*',
    },
  });

  return response.data;
};

// ELIMINAR
export const deleteCategorias = async (id) => {
  const response = await api.delete(`/categorias?id=eq.${id}`, {
    params: {
      select: '*',
    },
  });

  return response.data;
};