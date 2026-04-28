import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../../services/productosServices/LuisServices/productService';

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data: products = [], isLoading, isError, error } = useQuery({
    queryKey: ['productsList'],
    queryFn: getProducts,
  });

  const mutationCreate = useMutation({
    mutationFn: createProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['productsList'] }),
  });

  const mutationUpdate = useMutation({
    mutationFn: ({ id, product }) => updateProduct(id, product),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['productsList'] }),
  });

  const mutationDelete = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['productsList'] }),
  });

  return {
    products,
    loading: isLoading,
    error: isError ? error : null,
    addProduct: mutationCreate.mutateAsync,
    editProduct: (id, product) => mutationUpdate.mutateAsync({ id, product }),
    removeProduct: mutationDelete.mutateAsync,
  };
};
