
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';


export const CategoriaList = ({ onDelete, onEdit, categorias }) => {
  if (categorias.length === 0) {
    return <p>No hay productos registrados.</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Detalle de la Categoria
      </Typography>

      {categorias.map((categoria) => (
        <Paper key={categoria.id} sx={{ p: 2, mb: 2 }}>
          {Object.entries(categoria).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <strong>{key}:</strong>{' '}
              {Array.isArray(value) ? value.join(', ') : String(value)}
            </div>
          ))}
          <IconButton onClick={() => onEdit(categoria)} sx={{ marginTop: '8px' }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(categoria.id)} sx={{ marginTop: '8px' }}>
            <DeleteIcon />
          </IconButton>
        </Paper>
      ))}
    </TableContainer>
  );
};