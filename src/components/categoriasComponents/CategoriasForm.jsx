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

export const CategoryForm = ({
  editingId,
  formData,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Card>
      <CardContent>
        {/* Encabezado del formulario */}
        <Stack
            direction="row"
            spacing={1.5}
            sx={{
                alignItems: 'center',
                mb: 3,
            }}
            >
          {/* Ícono decorativo */}
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
            {/* Titulo */}
            <Typography variant="h5">
              {editingId ? 'Editar categoría' : 'Registrar categoría'}
            </Typography>

          </Box>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        {/* Formulario */}
        <Box component="form" onSubmit={onSubmit} autoComplete="off">
          <Stack spacing={2.5}>
            {/* Nombre */}
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre de la categoría"
              placeholder="Ingrese Categoría"
              value={formData.nombre}
              onChange={onChange}
              required
              fullWidth
            />

            {/* Slug */}
            <TextField
              id="slug"
              name="slug"
              label="Slug"
              placeholder="Ingrese Slug"
              value={formData.slug}
              onChange={onChange}
              required
              fullWidth
            />

            {/* Estado activo / inactivo */}
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
                    checked={formData.activo}
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

            {/* Botones */}
           <Stack
                direction="row"
                spacing={1.5}
                sx={{
                    alignItems: 'center',
                    mb: 3,
                }}
                >
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