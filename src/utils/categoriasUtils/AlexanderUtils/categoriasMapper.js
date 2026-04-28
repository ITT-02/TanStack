export const initialCategoryFormData = {
  nombre: '',
  slug: '',
  activo: true,
};

export const mapCategoryToFormData = (category) => ({
  nombre: category.nombre || '',
  slug: category.slug || '',
  activo: category.activo ?? true,
});

export const mapFormDataToCategory = (formData) => ({
  nombre: formData.nombre.trim(),
  slug: formData.slug.trim(),
  activo: formData.activo,
});