import { useState } from 'react';
import { CategoryForm } from '../../../components/productosComponents/GuillermoComponents/CategoryForm';
import { CategoryList } from '../../../components/productosComponents/GuillermoComponents/CategoryList';
import { useCategories } from '../../../hooks/categoriasHooks/GuillermoHooks/useCategoriesTanstack';
import {
  initialCategoryFormData,
  mapFormDataToCategory,
  mapCategoryToFormData,
} from '../../../utils/categoriasUtils/GuillermoUtils/categoryMapper';

export const CategoriesPage = () => {
  const [formData, setFormData] = useState(initialCategoryFormData);
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState(null);
  const { error, loading, categories, removeCategory, saveCategory } = useCategories();

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(initialCategoryFormData);
    setEditingId(null);
    setFormError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    const categoryData = mapFormDataToCategory(formData);
    const result = await saveCategory(categoryData, editingId);

    if (result.success) {
      resetForm();
    } else {
      setFormError(result.error);
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData(mapCategoryToFormData(category));
  };

  const handleDelete = async (id) => {
    const result = await removeCategory(id);

    if (result.success && editingId === id) {
      resetForm();
    } else if (!result.success) {
      setFormError(result.error);
    }
  };

  if (loading) return <p>Cargando categorías...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Categorías</h1>

      {error && <p style={{ color: 'red' }}>Error al cargar: {error}</p>}
      {formError && <p style={{ color: 'red', fontWeight: 'bold', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '4px' }}>⚠️ {formError}</p>}

      <CategoryForm
        editingId={editingId}
        formData={formData}
        onCancel={resetForm}
        onChange={changeInput}
        onSubmit={handleSubmit}
      />

      <hr />

      <CategoryList
        onDelete={handleDelete}
        onEdit={handleEdit}
        categories={categories}
      />
    </div>
  );
};