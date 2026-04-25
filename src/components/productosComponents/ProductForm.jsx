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
  editingId,
  formData,
  categories = [],
  onCancel,
  onChange,
  onSubmit,
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
          {/* Ícono*/}
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
          </Box>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        {/* Formulario */}
        <Box component="form" onSubmit={onSubmit} autoComplete="off">
          <Grid container spacing={2}>
            {/* SKU */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="sku"
                name="sku"
                label="SKU"
                placeholder="Ingrese SKU"
                type="text"
                value={formData.sku}
                onChange={onChange}
                fullWidth
              />
            </Grid>

            {/* Nombre */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre"
                placeholder="Ingrese nombre"
                type="text"
                value={formData.nombre}
                onChange={onChange}
                fullWidth
              />
            </Grid>

            {/* Slug */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="slug"
                name="slug"
                label="Slug"
                placeholder="Ingrese slug"
                type="text"
                value={formData.slug}
                onChange={onChange}
                fullWidth
              />
            </Grid>

            {/* Categoría */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="categoria_id"
                name="categoria_id"
                label="Categoría"
                value={formData.categoria_id}
                onChange={onChange}
                fullWidth
                select
              >
                <MenuItem value="">
                  Seleccione una categoría
                </MenuItem>

                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.nombre}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Descripción */}
            <Grid size={{ xs: 12 }}>
              <TextField
                id="descripcion"
                name="descripcion"
                label="Descripción"
                placeholder="Ingrese descripción"
                value={formData.descripcion}
                onChange={onChange}
                fullWidth
                multiline
                minRows={3}
              />
            </Grid>

            {/* Precio */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                id="precio"
                name="precio"
                label="Precio"
                placeholder="Ingrese precio"
                type="number"
                value={formData.precio}
                onChange={onChange}
                fullWidth
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

            {/* Stock actual */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                id="stock_actual"
                name="stock_actual"
                label="Stock actual"
                placeholder="Ingrese stock actual"
                type="number"
                value={formData.stock_actual}
                onChange={onChange}
                fullWidth
                slotProps={{
                  htmlInput: {
                    min: '0',
                  },
                }}
              />
            </Grid>

            {/* Stock mínimo */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                id="stock_minimo"
                name="stock_minimo"
                label="Stock mínimo"
                placeholder="Ingrese stock mínimo"
                type="number"
                value={formData.stock_minimo}
                onChange={onChange}
                fullWidth
                slotProps={{
                  htmlInput: {
                    min: '0',
                  },
                }}
              />
            </Grid>

            {/* Material */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="material"
                name="material"
                label="Material"
                placeholder="Ingrese material"
                type="text"
                value={formData.material}
                onChange={onChange}
                fullWidth
              />
            </Grid>

            {/* Estado activo / inactivo */}
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
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  <Switch
                    id="activo"
                    name="activo"
                    checked={formData.activo}
                    onChange={onChange}
                    color="primary"
                  />

                  <Typography fontWeight={600}>
                    {formData.activo ? 'Activo' : 'Inactivo'}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            {/* Fotos */}
            <Grid size={{ xs: 12 }}>
              <TextField
                id="fotos"
                name="fotos"
                label="Fotos"
                placeholder="Ingrese fotos separadas por coma"
                value={formData.fotos}
                onChange={onChange}
                fullWidth
                multiline
                minRows={2}
              />
            </Grid>

            {/* Botones */}
            <Grid size={{ xs: 12 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{
                  justifyContent: 'flex-end',
                  pt: 1,
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
                  {editingId ? 'Actualizar producto' : 'Agregar producto'}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}