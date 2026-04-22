import { useState } from 'react';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';
import { useProducts } from '../hooks/useProductsTanstack';
import {
  initialProductFormData,
  mapFormDataToProduct,
  mapProductToFormData,
} from '../utils/productMapper';

export const ProductsPage = () => {
  const [formData, setFormData] = useState(initialProductFormData);
  const [editingId, setEditingId] = useState(null);
  const { error, loading, products, removeProduct, saveProduct } = useProducts();

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(initialProductFormData);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = mapFormDataToProduct(formData);
    const wasSaved = await saveProduct(productData, editingId);

    if (wasSaved) {
      resetForm();
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData(mapProductToFormData(product));
  };

  const handleDelete = async (id) => {
    const wasDeleted = await removeProduct(id);

    if (wasDeleted && editingId === id) {
      resetForm();
    }
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Productos</h1>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ProductForm
        editingId={editingId}
        formData={formData}
        onCancel={resetForm}
        onChange={changeInput}
        onSubmit={handleSubmit}
      />

      <hr />

      <ProductList
        onDelete={handleDelete}
        onEdit={handleEdit}
        products={products}
      />
    </div>
  );
};