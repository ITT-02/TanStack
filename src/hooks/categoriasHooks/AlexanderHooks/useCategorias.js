import { useState, useEffect } from 'react';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../../services/categoriasServices/AlexanderServices/categoriasServices';

export const useCategorias = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await getCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Error al cargar categorías');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadCategories(); }, []);

  const saveCategory = async (data, editingId = null) => {
    try {
      if (editingId) await updateCategory(editingId, data);
      else await createCategory(data);
      await loadCategories();
      return true;
    } catch (err) {
      setError('Error al guardar categoría');
      return false;
    }
  };

  const removeCategory = async (id) => {
    try {
      await deleteCategory(id);
      await loadCategories();
      return true;
    } catch (err) {
      setError('Error al eliminar categoría');
      return false;
    }
  };

  return { categories, loading, error, saveCategory, removeCategory };
};