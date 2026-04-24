export const ProductForm = ({
  editingId,
  formData = {}, // evita errores si viene undefined
  onCancel,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>{editingId ? 'Editar producto' : 'Agregar producto'}</h3>

      <div>
        <label>SKU:</label>
        <input
          id="sku"
          name="sku"
          type="text"
          onChange={onChange}
          value={formData.sku || ""}
        />
      </div>

      <div>
        <label>Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          onChange={onChange}
          value={formData.nombre || ""}
        />
      </div>

      <div>
        <label>Slug:</label>
        <input
          id="slug"
          name="slug"
          type="text"
          onChange={onChange}
          value={formData.slug || ""}
        />
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={onChange}
          value={formData.descripcion || ""}
        />
      </div>

      <div>
        <label>Precio:</label>
        <input
          id="precio"
          name="precio"
          type="number"
          step="0.01"
          onChange={onChange}
          value={formData.precio || ""}
        />
      </div>

      <div>
        <label>Stock actual:</label>
        <input
          id="stock_actual"
          name="stock_actual"
          type="number"
          onChange={onChange}
          value={formData.stock_actual || ""}
        />
      </div>

      <div>
        <label>Stock mínimo:</label>
        <input
          id="stock_minimo"
          name="stock_minimo"
          type="number"
          onChange={onChange}
          value={formData.stock_minimo || ""}
        />
      </div>

      <div>
        <label>Categoría ID:</label>
        <input
          id="categoria_id"
          name="categoria_id"
          type="text"
          onChange={onChange}
          value={formData.categoria_id || ""}
        />
      </div>

      <div>
        <label>Material:</label>
        <input
          id="material"
          name="material"
          type="text"
          onChange={onChange}
          value={formData.material || ""}
        />
      </div>

      <div>
        <label>Fotos:</label>
        <textarea
          id="fotos"
          name="fotos"
          placeholder="Separa varias fotos por coma"
          onChange={onChange}
          value={formData.fotos || ""}
        />
      </div>

      <div>
        <label>
          <input
            id="activo"
            name="activo"
            type="checkbox"
            onChange={(e) =>
              onChange({
                target: {
                  name: "activo",
                  value: e.target.checked,
                },
              })
            }
            checked={formData.activo || false}
          />
          Activo
        </label>
      </div>

      <button type="submit">
        {editingId ? 'Actualizar producto' : 'Agregar producto'}
      </button>

      {editingId && (
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: '10px' }}
        >
          Cancelar edición
        </button>
      )}
    </form>
  );
};