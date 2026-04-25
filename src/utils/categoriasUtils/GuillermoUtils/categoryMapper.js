export const initialCategoryFormData = {
  id: '',
  nombre: '',
  slug: '',
  activo: true,
};

export const mapCategoryToFormData = (category) => ({
  id: category.id || '',
  nombre: category.nombre || '',
  slug: category.slug || '',
  activo: Boolean(category.activo),
});

// Para crear una nueva categoría
export const mapFormDataToCreateCategory = (formData) => {
  return {
    nombre: formData.nombre.trim(),
    slug: formData.slug.trim(),
    activo: formData.activo,
  };
};

// Para actualizar una categoría (sin incluir el id en el body)
export const mapFormDataToUpdateCategory = (formData) => {
  return {
    nombre: formData.nombre.trim(),
    slug: formData.slug.trim(),
    activo: formData.activo,
  };
};

// Mantener para compatibilidad (usa la versión de creación por defecto)
export const mapFormDataToCategory = (formData) => {
  return mapFormDataToCreateCategory(formData);
};