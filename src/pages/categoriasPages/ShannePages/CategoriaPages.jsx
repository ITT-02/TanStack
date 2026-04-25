import { useState } from "react";
import { Container, Typography, Divider, Stack, Box } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";

import { CategoryForm } from "../../../components/categoriasComponents/ShanneComponents/CategoriasForm";
import { CategoryList } from "../../../components/categoriasComponents/ShanneComponents/CategoriasList";

import { useCategories } from "../../../hooks/categoriasHooks/ShanneHooks/useCategorias";

import {
  initialCategoryFormData,
  mapCategoryToFormData,
  mapFormDataToCategory,
} from "../../../utils/categoriasUtils/ShanneUtils/categoriasMapper";

export const CategoriaPages = () => {
  const { categories, addCategory, editCategory, removeCategory } =
    useCategories();

  const [formData, setFormData] = useState(initialCategoryFormData);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = mapFormDataToCategory(formData);

    if (editingId) {
      await editCategory(editingId, data);
    } else {
      await addCategory(data);
    }

    setFormData(initialCategoryFormData);
    setEditingId(null);
  };

  const handleEdit = (cat) => {
    setFormData(mapCategoryToFormData(cat));
    setEditingId(cat.id);
  };

  const handleDelete = async (id) => {
    await removeCategory(id);
  };

  const handleCancel = () => {
    setFormData(initialCategoryFormData);
    setEditingId(null);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <CategoryIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography variant="h3" component="h1" fontWeight={700}>
            Gestión de Categorías
          </Typography>
        </Box>

        <CategoryForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          editingId={editingId}
          onCancel={handleCancel}
        />

        <Divider />

        <CategoryList
          categories={categories}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Stack>
    </Container>
  );
};

