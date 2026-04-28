import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import CategoryIcon from '@mui/icons-material/Category';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

export const CategoriasForm = ({
  formData,
  onChange,
  onSubmit,
  editingId,
  onCancel,
}) => {
  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <CategoryIcon />
          </Box>

          <Box>
            <Typography variant="h5">
              {editingId ? 'Editar categoría' : 'Registrar categoría'}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Mantén el nombre y slug consistentes.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Box component="form" onSubmit={onSubmit} autoComplete="off">
          <Stack spacing={2.5}>
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre de la categoría"
              placeholder="Ingrese categoría"
              value={formData.nombre}
              onChange={onChange}
              required
            />

            <TextField
              id="slug"
              name="slug"
              label="Slug"
              placeholder="Ingrese slug"
              value={formData.slug}
              onChange={onChange}
              helperText="Si se deja vacío, se puede generar automáticamente al guardar."
            />

            <Box
              sx={{
                px: 2,
                py: 1.5,
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'background.default',
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    id="activo"
                    name="activo"
                    checked={!!formData.activo}
                    onChange={onChange}
                    color="primary"
                  />
                }
                label={
                  <Typography fontWeight={600}>
                    {formData.activo ? 'Activa' : 'Inactiva'}
                  </Typography>
                }
              />
            </Box>

            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              {editingId && (
                <Button
                  type="button"
                  variant="outlined"
                  color="secondary"
                  startIcon={<CloseIcon />}
                  onClick={onCancel}
                >
                  Cancelar edición
                </Button>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
              >
                {editingId ? 'Actualizar categoría' : 'Guardar categoría'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
