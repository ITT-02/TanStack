export const initialcategoriaFormData = {
  nombre: '',
  slug: '',

  activo: true,
};

export const mapcategoriaToFormData = (category) => ({
  nombre: category.nombre || '',
  slug: category.slug || '',

  activo: Boolean(category.activo),
});

export const mapFormDataTocategoria = (formData) => ({

  nombre: formData.nombre.trim(),
  slug: formData.slug.trim(),

  activo: formData.activo,
});
