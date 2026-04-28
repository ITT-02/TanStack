import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../../services/categoriasServices/LuisServices/categoriasService';

export const useCategorias = () => {
  const queryClient = useQueryClient();

  const { data: categories = [], isLoading, isError, error } = useQuery({
    queryKey: ['categoriesList'],
    queryFn: getCategories,
  });

  const mutationCreate = useMutation({
    mutationFn: createCategory,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categoriesList'] }),
  });

  const mutationUpdate = useMutation({
    mutationFn: ({ id, category }) => updateCategory(id, category),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categoriesList'] }),
  });

  const mutationDelete = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categoriesList'] }),
  });

  return {
    categories,
    loading: isLoading,
    error: isError ? error : null,
    addCategory: mutationCreate.mutateAsync,
    editCategory: (id, category) => mutationUpdate.mutateAsync({ id, category }),
    removeCategory: mutationDelete.mutateAsync,
  };
};
