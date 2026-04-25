export const CategoryForm = ({
  formData,
  onChange,
  onSubmit,
  editingId,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>{editingId ? "Editar" : "Crear"} categoría</h3>

      <input
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={onChange}
      />

      <input
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={onChange}
      />

      <label>
        Activo
        <input
          type="checkbox"
          name="activo"
          checked={formData.activo}
          onChange={onChange}
        />
      </label>

      <button type="submit">
        {editingId ? "Actualizar" : "Guardar"}
      </button>

      {editingId && (
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
};