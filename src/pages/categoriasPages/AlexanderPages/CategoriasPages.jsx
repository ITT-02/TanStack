import { useState } from 'react';
import { Box, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';

import { CategoriasForm } from '../../../components/categoriasComponents/AlexanderComponents/CategoriasForm';
import { CategoriasList } from '../../../components/categoriasComponents/AlexanderComponents/CategoriasList';
import { useCategorias } from '../../../hooks/categoriasHooks/AlexanderHooks/useCategorias';
import { initialCategoryFormData, mapCategoryToFormData, mapFormDataToCategory } from '../../../utils/categoriasUtils/AlexanderUtils/categoriasMapper';

export const CategoriesPage = () => {
  const [formData, setFormData] = useState(initialCategoryFormData);
  const [editingId, setEditingId] = useState(null);

  const { categories, loading, error, saveCategory, removeCategory } = useCategorias();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleReset = () => {
    setFormData(initialCategoryFormData);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mappedData = mapFormDataToCategory(formData);
    const success = await saveCategory(mappedData, editingId);
    if (success) handleReset();
  };

  const handleEdit = (category) => {
    setEditingId(category.id);
    setFormData(mapCategoryToFormData(category));
  };

  const handleDelete = async (id) => {
    if(window.confirm('¿Seguro que deseas eliminarla?')) {
      const success = await removeCategory(id);
      if (success && editingId === id) handleReset();
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" mb={3}>Categorías (Alexander)</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Grid container spacing={3}>
        {/* CORRECCIÓN DE LA FORMA DE USAR GRID AQUÍ */}
        <Grid size={{ xs: 12, md: 4 }}>
          <CategoriasForm 
            formData={formData} 
            editingId={editingId} 
            onChange={handleChange} 
            onSubmit={handleSubmit} 
            onCancel={handleReset} 
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <CategoriasList 
            categories={categories} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </Grid>
      </Grid>
    </Container>
  );
};