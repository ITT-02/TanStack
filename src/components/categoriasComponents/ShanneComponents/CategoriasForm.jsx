import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export const CategoryForm = ({
  formData,
  onChange,
  onSubmit,
  editingId,
  onCancel,
}) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
        {editingId ? "Editar" : "Crear"} categoría
      </Typography>

      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            name="nombre"
            label="Nombre"
            placeholder="Nombre de la categoría"
            value={formData.nombre}
            onChange={onChange}
            fullWidth
            variant="outlined"
            required
          />

          <TextField
            name="slug"
            label="Slug"
            placeholder="slug-de-la-categoria"
            value={formData.slug}
            onChange={onChange}
            fullWidth
            variant="outlined"
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                name="activo"
                checked={formData.activo}
                onChange={onChange}
                color="primary"
              />
            }
            label="Activo"
          />

          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
            >
              {editingId ? "Actualizar" : "Guardar"}
            </Button>

            {editingId && (
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                startIcon={<CancelIcon />}
                onClick={onCancel}
              >
                Cancelar
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};

