export const initialProductFormData = {
  sku: '',
  nombre: '',
  slug: '',
  descripcion: '',
  precio: '',
  stock_actual: '',
  stock_minimo: '',
  categoria_id: '',
  material: '',
  fotos: '',
  activo: true,
};

export const mapProductToFormData = (product) => ({
  sku: product.sku || '',
  nombre: product.nombre || '',
  slug: product.slug || '',
  descripcion: product.descripcion || '',
  precio: product.precio ?? '',
  stock_actual: product.stock_actual ?? '',
  stock_minimo: product.stock_minimo ?? '',
  categoria_id: product.categoria_id || '',
  material: product.material || '',
  fotos: Array.isArray(product.fotos) ? product.fotos.join(', ') : '',
  activo: Boolean(product.activo),
});

export const mapFormDataToProduct = (formData) => ({
  sku: formData.sku.trim(),
  nombre: formData.nombre.trim(),
  slug: formData.slug.trim(),
  descripcion: formData.descripcion.trim() || null,
  precio: Number(formData.precio),
  stock_actual: Number(formData.stock_actual),
  stock_minimo: Number(formData.stock_minimo),
  categoria_id: formData.categoria_id.trim(),
  material: formData.material.trim() || null,
  fotos: formData.fotos
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean),
  activo: formData.activo,
});