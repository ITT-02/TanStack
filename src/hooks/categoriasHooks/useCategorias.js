import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../../services/categoriasServices/categoriasServices';

export const useCategories = () => {
  const queryClient = useQueryClient();

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const createMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const saveCategory = async (categoryData, editingId = null) => {
    if (editingId) {
      await updateMutation.mutateAsync({
        id: editingId,
        data: categoryData,
      });
    } else {
      await createMutation.mutateAsync(categoryData);
    }
  };

  const removeCategory = async (id) => {
    await deleteMutation.mutateAsync(id);
  };

  return {
    error: categoriesQuery.error?.message ?? null,
    loading: categoriesQuery.isLoading,
    categories: categoriesQuery.data ?? [],
    removeCategory,
    saveCategory,
  };
};