export const initialCategoryFormData = {
  nombre: '',
  slug: '',
  activo: true,
};

export const mapCategoryToFormData = (category) => ({
  nombre: category.nombre || '',
  slug: category.slug || '',
  activo: Boolean(category.activo),
});

export const mapFormDataToCategory = (formData) => ({
  nombre: formData.nombre.trim(),
  slug: formData.slug.trim(),
  activo: formData.activo,
});