import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const CategoryList = ({ categories, onEdit, onDelete }) => {
  if (categories.length === 0) {
    return (
      <Paper elevation={2} sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="body1" color="text.secondary" align="center">
          No hay categorías registradas.
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 4 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "primary.main" }}>
            <TableCell sx={{ color: "primary.contrastText", fontWeight: 600 }}>
              ID
            </TableCell>
            <TableCell sx={{ color: "primary.contrastText", fontWeight: 600 }}>
              Nombre
            </TableCell>
            <TableCell sx={{ color: "primary.contrastText", fontWeight: 600 }}>
              Slug
            </TableCell>
            <TableCell sx={{ color: "primary.contrastText", fontWeight: 600 }}>
              Activo
            </TableCell>
            <TableCell
              sx={{ color: "primary.contrastText", fontWeight: 600 }}
              align="center"
            >
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.isArray(categories) && categories.map((cat) => (
            <TableRow
              key={cat.id}
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{cat.id}</TableCell>
              <TableCell>{cat.nombre}</TableCell>
              <TableCell>{cat.slug}</TableCell>
              <TableCell>
                <Chip
                  label={cat.activo ? "Sí" : "No"}
                  color={cat.activo ? "success" : "error"}
                  size="small"
                  sx={{ fontWeight: 500 }}
                />
              </TableCell>
              <TableCell align="center">
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(cat)}
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => onDelete(cat.id)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

