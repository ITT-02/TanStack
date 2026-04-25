export const CategoryList = ({ categories, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Slug</th>
          <th>Activo</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {categories.map((cat) => (
          <tr key={cat.id}>
            <td>{cat.id}</td>
            <td>{cat.nombre}</td>
            <td>{cat.slug}</td>
            <td>{cat.activo ? "Sí" : "No"}</td>
            <td>
              <button onClick={() => onEdit(cat)}>Editar</button>
              <button onClick={() => onDelete(cat.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};