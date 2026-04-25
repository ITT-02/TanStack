import { useEffect, useState } from 'react';
import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  updateCategoria,
} from '/../services/categoriasService';

export const useCategorias = () => {
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCategorias = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getCategoria();
      setCategoria(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const fetchInitialProducts = async () => {
      try {
        const data = await getCategoria();

        if (!cancelled) {
          setCategoria(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Error al cargar productos');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchInitialProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const saveCategoria = async (productData, editingId = null) => {
    try {
      setError(null);

      if (editingId) {
        await updateCategoria(editingId, productData);
      } else {
        await createCategoria(productData);
      }

      await loadCategorias();
      return true;
    } catch (err) {
      setError(err.message || 'Error al guardar producto');
      return false;
    }
  };

  const removeCategoria = async (id) => {
    try {
      setError(null);
      await deleteCategoria(id);
      await loadCategorias();
      return true;
    } catch (err) {
      setError(err.message || 'Error al eliminar producto');
      return false;
    }
  };

  return {
    error,
    loading,
    categoria,
    removeCategoria,
    saveCategoria,
  };
};
