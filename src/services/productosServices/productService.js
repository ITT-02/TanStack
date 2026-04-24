import {api} from '../../api/axiosConfig';

// LISTAR
export const getProducts = async () => {
  const response = await api.get('/productos?select=*');
  return response.data;
};

// CREAR
export const createProduct = async (newProduct) => {
  const response = await api.post('/productos', newProduct, {
    params: {
      select: '*',
    },
  });

  return response.data;
};

// ACTUALIZAR
export const updateProduct = async (id, updatedProduct) => {
  const response = await api.patch(`/productos?id=eq.${id}`, updatedProduct, {
    params: {
      select: '*',
    },
  });

  return response.data;
};

// ELIMINAR
export const deleteProduct = async (id) => {
  const response = await api.delete(`/productos?id=eq.${id}`, {
    params: {
      select: '*',
    },
  });

  return response.data;
};