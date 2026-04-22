export const ProductForm = ({
  editingId,
  formData,
  onCancel,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>{editingId ? 'Editar producto' : 'Agregar producto'}</h3>

      <div>
        <label>
          SKU:
          <input
            id="sku"
            name="sku"
            type="text"
            onChange={onChange}
            value={formData.sku}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Nombre:
          <input
            id="nombre"
            name="nombre"
            type="text"
            onChange={onChange}
            value={formData.nombre}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Slug:
          <input
            id="slug"
            name="slug"
            type="text"
            onChange={onChange}
            value={formData.slug}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Descripción:
          <textarea
            id="descripcion"
            name="descripcion"
            onChange={onChange}
            value={formData.descripcion}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Precio:
          <input
            id="precio"
            name="precio"
            type="number"
            step="0.01"
            onChange={onChange}
            value={formData.precio}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Stock actual:
          <input
            id="stock_actual"
            name="stock_actual"
            type="number"
            onChange={onChange}
            value={formData.stock_actual}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Stock mínimo:
          <input
            id="stock_minimo"
            name="stock_minimo"
            type="number"
            onChange={onChange}
            value={formData.stock_minimo}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Categoría ID:
          <input
            id="categoria_id"
            name="categoria_id"
            type="text"
            onChange={onChange}
            value={formData.categoria_id}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Material:
          <input
            id="material"
            name="material"
            type="text"
            onChange={onChange}
            value={formData.material}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Fotos:
          <textarea
            id="fotos"
            name="fotos"
            placeholder="Separa varias fotos por coma"
            onChange={onChange}
            value={formData.fotos}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Activo:
          <input
            id="activo"
            name="activo"
            type="checkbox"
            onChange={onChange}
            checked={formData.activo}
          />
        </label>
      </div>

      <br />

      <button type="submit">
        {editingId ? 'Actualizar producto' : 'Agregar producto'}
      </button>

      {editingId && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>
          Cancelar edición
        </button>
      )}
    </form>
  );
};