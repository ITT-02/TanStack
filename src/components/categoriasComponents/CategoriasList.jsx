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

export const CategoryList = ({ categories, onEdit, onDelete }) => {
  // Si no hay categorias
  if (categories.length === 0) {
    return (
      <Paper
        sx={{
          p: 3,
          textAlign: 'center',
        }}
      >
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
      {/* Título de la sección */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Lista de categorías
      </Typography>

      {/* 
        TableContainer es el contenedor visual de la tabla.
        Paper le da fondo, borde y apariencia de panel.
      */}
      <TableContainer component={Paper}>
        <Table>
          {/* Encabezado de la tabla */}
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>

          {/* Cuerpo de la tabla */}
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} hover>
                <TableCell>{category.id}</TableCell>

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
                 <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1.5}
                    sx={{
                        justifyContent: 'flex-end',
                        pt: 1,
                    }}
                    >
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