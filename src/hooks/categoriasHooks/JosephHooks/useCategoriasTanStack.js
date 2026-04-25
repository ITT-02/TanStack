import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import {
  createCategorias,
  deleteCategorias,
  getCategorias,
  updateCategorias,
} from '../services/categoriasService';

export const useCategorias = () => {

    const queryClient = useQueryClient ();

    const categoriaQuery = useQuery(
        {
            queryKey: ['categorias'],
            queryFn: getCategorias,
        }
    );

    const createMutation = useMutation(
    {
        mutationFn: createCategorias,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['categorias'] });
        },
    })

    const updateMutation = useMutation(
    {
        mutationFn: ({id, categorias}) => updateCategorias(id, categorias),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['categorias'] });
        },
    })

      const deleteMutation = useMutation(
    {
        mutationFn: deleteCategorias,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['categorias'] });
        },
    })
   
  
  const saveCategoria = async (categoriaData, editingId = null) => {
    try {
      if (editingId){
        await updateMutation.mutateAsync({
            id: editingId,
            categorias: categoriaData
        });
      } else {
        await createMutation.mutateAsync(categoriaData);
      }

      return true;
    } catch {
      return false;
    }
  };

  const removeCategorias = async (id) => {
    try {
      await deleteMutation.mutateAsync(id);
      return true;
    } catch {
      return false;
    }
  };

  return {
    error:
      categoriaQuery.error?.message ??
      createMutation.error?.message ??
      updateMutation.error?.message ??
      deleteMutation.error?.message ??
      null,
    loading: categoriaQuery.isLoading,
    categorias: categoriaQuery.data ?? [],
    removeCategorias,
    saveCategoria,
  };
};
