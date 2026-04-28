import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const CategoriasList = ({ categories = [], onEdit, onDelete }) => {
  // Si la lista está vacía, mostramos un mensaje bonito
  if (!categories || categories.length === 0) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6">
          No hay categorías registradas.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cuando registres una categoría, aparecerá en esta lista.
        </Typography>
      </Paper>
    );
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Lista de categorías
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} hover>
                <TableCell>
                  <Typography variant="caption" color="text.secondary">
                    {category.id.slice(0, 8)}... {/* Mostramos solo el principio del ID */}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography fontWeight={600}>
                    {category.nombre}
                  </Typography>
                </TableCell>

                <TableCell>{category.slug}</TableCell>

                <TableCell>
                  <Chip
                    label={category.activo ? 'Activa' : 'Inactiva'}
                    color={category.activo ? 'success' : 'default'}
                    size="small"
                    variant={category.activo ? 'filled' : 'outlined'}
                  />
                </TableCell>

                <TableCell align="right">
                 <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => onEdit(category)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => onDelete(category.id)}
                    >
                      Eliminar
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};