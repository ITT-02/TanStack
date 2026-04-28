import { useState } from 'react';

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { CategoriasForm } from '../../../components/categoriasComponents/LuisComponents/CategoriasForm';
import { CategoriasList } from '../../../components/categoriasComponents/LuisComponents/CategoriasList';

import { useCategorias } from '../../../hooks/categoriasHooks/LuisHooks/useCategorias';

import {
  initialCategoryFormData,
  mapCategoryToFormData,
  mapFormDataToCategory,
} from '../../../utils/categoriasUtils/LuisUtils/categoriasMapper';

export const CategoriesPage = () => {
  const [formData, setFormData] = useState(initialCategoryFormData);
  const [editingId, setEditingId] = useState(null);

  const {
    categories,
    loading,
    error,
    addCategory,
    editCategory,
    removeCategory,
  } = useCategorias();

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

    if (editingId) {
      await editCategory(editingId, categoryData);
    } else {
      await addCategory(categoryData);
    }

    resetForm();
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData(mapCategoryToFormData(category));
  };

  const handleDelete = async (id) => {
    await removeCategory(id);

    if (editingId === id) {
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
          Categorías (Luis)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Crea, edita y elimina categorías.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error: {String(error?.message || error)}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <CategoriasForm
            editingId={editingId}
            formData={formData}
            onCancel={resetForm}
            onChange={changeInput}
            onSubmit={handleSubmit}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <CategoriasList
            categories={categories}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
