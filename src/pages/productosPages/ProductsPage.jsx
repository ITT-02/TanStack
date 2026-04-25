import { useState } from 'react';

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { ProductForm } from '../../components/productosComponents/ProductForm';
import { ProductList } from '../../components/productosComponents/ProductList';

import { useProducts } from '../../hooks/productosHooks/useProductsTanstack';
import { useCategories } from '../../hooks/categoriasHooks/useCategorias';

import {
  initialProductFormData,
  mapFormDataToProduct,
  mapProductToFormData,
} from '../../utils/productosUtils/productMapper';

export const ProductsPage = () => {
  const [formData, setFormData] = useState(initialProductFormData);
  const [editingId, setEditingId] = useState(null);

  const {
    error,
    loading,
    products,
    removeProduct,
    saveProduct,
  } = useProducts();

  // Traemos las categorías para mostrarlas en el select.
  const {
  categories,
} = useCategories();

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
          Productos
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Administra los productos registrados en la tienda.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error: {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <ProductForm
            editingId={editingId}
            formData={formData}
            categories={categories}
            onCancel={resetForm}
            onChange={changeInput}
            onSubmit={handleSubmit}
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 7 }}>
          <ProductList
            onDelete={handleDelete}
            onEdit={handleEdit}
            products={products}
          />
        </Grid>
      </Grid>
    </Container>
  );
};