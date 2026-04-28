import { Box, Button, Card, Table, Typography, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";

export const CategoryList = ({ onDelete, onEdit, categories }) => {
  if (categories.length === 0) {
    return <p>No hay categorías registradas.</p>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ mb: 2 }} style={{ marginBottom: '12px', borderCollapse: 'separate', borderSpacing: '0 12px' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>ID</TableCell>
              <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Nombre</TableCell>
              <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Slug</TableCell>
              <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Estado</TableCell>
              <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.id}
                </TableCell>
                <TableCell align="left">{category.nombre}</TableCell>
                <TableCell align="left">{category.slug}</TableCell>
                <TableCell align="left">{category.activo ? 'Activo' : 'Inactivo'}</TableCell>
                <TableCell align="center" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={() => onEdit(category)}
                  >
                    Editar
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="dark"
                    onClick={() => onDelete(category.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    Eliminar
                  </Button> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Box>
  );
};