import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';

export const useProducts = () => {

    const queryClient = useQueryClient ();

    const productsQuery = useQuery(
        {
            queryKey: ['products'],
            queryFn: getProducts,
        }
    );

    const createMutation = useMutation(
    {
        mutationFn: createProduct,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['products'] });
        },
    })

    const updateMutation = useMutation(
    {
        mutationFn: ({id, product}) => updateProduct(id, product),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['products'] });
        },
    })

      const deleteMutation = useMutation(
    {
        mutationFn: deleteProduct,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['products'] });
        },
    })
   
  
  const saveProduct = async (productData, editingId = null) => {
    if (editingId){
        await updateMutation.mutateAsync({
            id: editingId,
            product: productData
        });
     } 
         else{
            await createMutation.mutateAsync(productData)
         }
  };

  const removeProduct = async (id) => {
    await deleteMutation.mutateAsync(id); 
  };

  return {
    error: productsQuery.erro?.message ?? null,
    loading: productsQuery.isLoading,
    products: productsQuery.data ?? [],
    removeProduct,
    saveProduct,
  };
};