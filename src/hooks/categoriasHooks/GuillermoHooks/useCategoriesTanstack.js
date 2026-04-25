import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../../../services/categoriasServices/GuillermoService/categoryService';

export const useCategories = () => {

    const queryClient = useQueryClient ();

    const categoriesQuery = useQuery(
        {
            queryKey: ['categories'],
            queryFn: getCategories,
        }
    );

    const createMutation = useMutation(
    {
        mutationFn: createCategory,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['categories'] });
        },
    })

    const updateMutation = useMutation(
    {
        mutationFn: ({id, category}) => updateCategory(id, category),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['categories'] });
        },
    })

      const deleteMutation = useMutation(
    {
        mutationFn: deleteCategory,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['categories'] });
        },
    })
   
  
  const saveCategory = async (categoryData, editingId = null) => {
    try {
      if (editingId){
        await updateMutation.mutateAsync({
            id: editingId,
            category: categoryData
        });
      } else {
        await createMutation.mutateAsync(categoryData)
      }
      return { success: true, error: null };
    } catch (error) {
      console.error('Error al guardar categoría:', error);
      
      let errorMessage = 'Error al guardar la categoría';
      
      if (error.response?.status === 409) {
        if (error.response.data?.message?.includes('slug')) {
          errorMessage = '❌ El slug ya existe. Por favor, usa un slug diferente.';
        } else {
          errorMessage = '❌ Conflicto: Este registro ya existe.';
        }
      } else if (error.response?.data?.message) {
        errorMessage = `❌ ${error.response.data.message}`;
      }
      
      return { success: false, error: errorMessage };
    }
  };

  const removeCategory = async (id) => {
    try {
      await deleteMutation.mutateAsync(id);
      return { success: true, error: null };
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
      let errorMessage = 'Error al eliminar la categoría';
      
      if (error.response?.data?.message) {
        errorMessage = `❌ ${error.response.data.message}`;
      }
      
      return { success: false, error: errorMessage };
    }
  };

  return {
    error: categoriesQuery.error?.message ?? null,
    loading: categoriesQuery.isLoading,
    categories: categoriesQuery.data ?? [],
    removeCategory,
    saveCategory,
  };
};