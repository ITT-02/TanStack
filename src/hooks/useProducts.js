import { useEffect, useState } from 'react';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const saveProduct = async (productData, editingId = null) => {
    try {
      setError(null);

      if (editingId) {
        await updateProduct(editingId, productData);
      } else {
        await createProduct(productData);
      }

      await loadProducts();
      return true;
    } catch (err) {
      setError(err.message || 'Error al guardar producto');
      return false;
    }
  };

  const removeProduct = async (id) => {
    try {
      setError(null);
      await deleteProduct(id);
      await loadProducts();
      return true;
    } catch (err) {
      setError(err.message || 'Error al eliminar producto');
      return false;
    }
  };

  return {
    error,
    loading,
    products,
    removeProduct,
    saveProduct,
  };
};