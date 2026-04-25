import { useState } from 'react';

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { CategoryForm } from '../../components/categoriasComponents/CategoriasForm';
import { CategoryList } from '../../components/categoriasComponents/CategoriasList';

import { useCategories } from '../../hooks/categoriasHooks/useCategorias';

import {
  initialCategoryFormData,
  mapCategoryToFormData,
  mapFormDataToCategory,
} from '../../utils/categoriasUtils/categoriasMapper';

export const CategoriesPage = () => {
  const [formData, setFormData] = useState(initialCategoryFormData);
  const [editingId, setEditingId] = useState(null);

  const {
    error,
    loading,
    categories,
    removeCategory,
    saveCategory,
  } = useCategories();

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = mapFormDataToCategory(formData);

    const wasSaved = await saveCategory(categoryData, editingId);

    if (wasSaved) {
      resetForm();
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData(mapCategoryToFormData(category));
  };

  const handleDelete = async (id) => {
    const wasDeleted = await removeCategory(id);

    if (wasDeleted && editingId === id) {
      resetForm();
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '60vh',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          Categorías
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error: {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <CategoryForm
            editingId={editingId}
            formData={formData}
            onCancel={resetForm}
            onChange={changeInput}
            onSubmit={handleSubmit}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <CategoryList
            categories={categories}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Grid>
      </Grid>
    </Container>
  );
};