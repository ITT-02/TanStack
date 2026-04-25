// Estado inicial del formulario de categorías.
export const initialCategoryFormData = {
  nombre: '',
  slug: '',
  activo: true,
};

// Convierte una categoría que viene de la API
// al formato que necesita el formulario.
export const mapCategoryToFormData = (category) => ({
  nombre: category.nombre || '',
  slug: category.slug || '',
  activo: category.activo ?? true,
});

// Convierte los datos del formulario
// al formato que espera la API para crear o actualizar.
export const mapFormDataToCategory = (formData) => ({
  nombre: formData.nombre.trim(),
  slug: formData.slug.trim(),
  activo: formData.activo,
});