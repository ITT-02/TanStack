export const ProductList = ({ onDelete, onEdit, products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No hay productos registrados.</p>;
  }
 
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} style={{ marginBottom: '12px' }}>
          <strong>{product.nombre}</strong> - S/ {product.precio}
          <br />
          SKU: {product.sku}
          <br />
          Slug: {product.slug}
          <br />
          Descripción: {product.descripcion || 'Sin descripción'}
          <br />
          Stock actual: {product.stock_actual}
          <br />
          Stock mínimo: {product.stock_minimo}
          <br />
          Categoría ID: {product.categoria_id}
          <br />
          Material: {product.material || 'Sin material'}
          <br />
          Fotos:{' '}
          {Array.isArray(product.fotos) && product.fotos.length > 0
            ? product.fotos.join(', ')
            : 'Sin fotos'}
          <br />
          Estado: {product.activo ? 'Activo' : 'Inactivo'}
          <br />
 
          <button
            type="button"
            onClick={() => onEdit(product)}
            style={{ marginTop: '8px' }}
          >
            Editar
          </button>
 
          <button
            type="button"
            onClick={() => onDelete(product.id)}
            style={{ marginLeft: '10px' }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};
