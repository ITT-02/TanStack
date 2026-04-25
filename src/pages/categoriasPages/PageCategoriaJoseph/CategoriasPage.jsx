import { useState } from 'react';
import { CategoriaForm } from '../JosephComponents/CategoriasForm';
import { CategoriaList } from '../JosephComponents/CategoriasList';
import { useCategorias } from '../hooks/useCategoriasTanStack';
import {
  initialcategoriaFormData,
  mapFormDataTocategoria,
  mapcategoriaToFormData,
} from '../utils/categoriasMapper';
import Box from '@mui/material/Box';
export const CategoriasPage = () => {
  const [formData, setFormData] = useState(initialcategoriaFormData);
  const [editingId, setEditingId] = useState(null);
  const { error, loading, categorias, removeCategorias, saveCategoria } = useCategorias();

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const changeNumberInput = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value ?? '',
    }));
  };

  const resetForm = () => {
    setFormData(initialcategoriaFormData);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoriaData = mapFormDataTocategoria(formData);
    const wasSaved = await saveCategoria(categoriaData, editingId);

    if (wasSaved) {
      resetForm();
    }
  };

  const handleEdit = (categoria) => {
    setEditingId(categoria.id);
    setFormData(mapcategoriaToFormData(categoria));
  };

  const handleDelete = async (id) => {
    const wasDeleted = await removeCategorias(id);

    if (wasDeleted && editingId === id) {
      resetForm();
    }
  };

  if (loading) return <p>Cargando Categorias...</p>;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>categoriaos</h1>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
          <CategoriaForm
            editingId={editingId}
            formData={formData}
            onCancel={resetForm}
            onChange={changeInput}
            onNumberChange={changeNumberInput}
            onSubmit={handleSubmit}
          />

          <hr />

          <CategoriaList
            onDelete={handleDelete}
            onEdit={handleEdit}
            categorias={categorias}
          />
        </Box>
      </Box>
    </Box>
  );
};
