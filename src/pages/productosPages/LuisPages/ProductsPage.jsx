import { useState } from 'react';

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { ProductForm } from '../../../components/productosComponents/LuisComponents/ProductForm';
import { ProductList } from '../../../components/productosComponents/LuisComponents/ProductList';

import { useProducts } from '../../../hooks/productosHooks/LuisHooks/useProducts';
import { useCategorias } from '../../../hooks/categoriasHooks/LuisHooks/useCategorias';

import {
  initialProductFormData,
  mapFormDataToProduct,
  mapProductToFormData,
} from '../../../utils/productosUtils/LuisUtils/productMapper';

export const ProductsPage = () => {
  const [formData, setFormData] = useState(initialProductFormData);
  const [editingId, setEditingId] = useState(null);

  const {
    products,
    loading,
    error,
    addProduct,
    editProduct,
    removeProduct,
  } = useProducts();

  const { categories } = useCategorias();

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

    if (editingId) {
      await editProduct(editingId, productData);
    } else {
      await addProduct(productData);
    }

    resetForm();
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData(mapProductToFormData(product));
  };

  const handleDelete = async (id) => {
    await removeProduct(id);

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
          Productos (Luis)
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Administra los productos registrados en la tienda.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Error: {String(error?.message || error)}
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
