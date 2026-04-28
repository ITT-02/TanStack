import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

export const ProductForm = ({
  formData,
  onChange,
  onSubmit,
  editingId,
  onCancel,
  categories,
}) => {
  const safeCategories = Array.isArray(categories) ? categories : [];

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
            <Inventory2Icon />
          </Box>

          <Box>
            <Typography variant="h5">
              {editingId ? 'Editar producto' : 'Agregar producto'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Completa la información básica del producto.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Box component="form" onSubmit={onSubmit} autoComplete="off">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="sku"
                name="sku"
                label="SKU"
                placeholder="Ingrese SKU"
                value={formData.sku}
                onChange={onChange}
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre"
                placeholder="Ingrese nombre"
                value={formData.nombre}
                onChange={onChange}
                required
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="slug"
                name="slug"
                label="Slug"
                placeholder="Ingrese slug"
                value={formData.slug}
                onChange={onChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="categoria_id"
                name="categoria_id"
                label="Categoría"
                value={formData.categoria_id}
                onChange={onChange}
                select
                required
              >
                <MenuItem value="">Seleccione una categoría</MenuItem>
                {safeCategories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.nombre}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                id="descripcion"
                name="descripcion"
                label="Descripción"
                placeholder="Ingrese descripción"
                value={formData.descripcion}
                onChange={onChange}
                multiline
                minRows={3}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                id="precio"
                name="precio"
                label="Precio"
                placeholder="Ingrese precio"
                type="number"
                value={formData.precio}
                onChange={onChange}
                required
                slotProps={{
                  htmlInput: {
                    step: '0.01',
                    min: '0',
                  },
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">S/</InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                id="stock_actual"
                name="stock_actual"
                label="Stock actual"
                placeholder="Ingrese stock actual"
                type="number"
                value={formData.stock_actual}
                onChange={onChange}
                slotProps={{
                  htmlInput: {
                    min: '0',
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                id="stock_minimo"
                name="stock_minimo"
                label="Stock mínimo"
                placeholder="Ingrese stock mínimo"
                type="number"
                value={formData.stock_minimo}
                onChange={onChange}
                slotProps={{
                  htmlInput: {
                    min: '0',
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="material"
                name="material"
                label="Material"
                placeholder="Ingrese material"
                value={formData.material}
                onChange={onChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  bgcolor: 'background.default',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Switch
                    id="activo"
                    name="activo"
                    checked={!!formData.activo}
                    onChange={onChange}
                    color="primary"
                  />

                  <Typography fontWeight={600}>
                    {formData.activo ? 'Activo' : 'Inactivo'}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
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
                  {editingId ? 'Actualizar producto' : 'Guardar producto'}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
