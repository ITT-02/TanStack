import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  MenuItem // <-- ¡Importamos MenuItem aquí!
} from '@mui/material';

export const ProductForm = ({
  editingId = null,
  formData = {},
  categories = [], // <-- Aseguramos recibir las categorías
  onCancel,
  onChange,
  onSubmit,
}) => {
  const getValue = (field) => formData?.[field] || '';

  return (
    <Box 
      component="form" 
      onSubmit={onSubmit} 
      sx={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '20px',
        border: '1px solid #ccc', 
        borderRadius: '8px',
        marginTop: '20px'
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        {editingId ? 'Editar Producto' : 'Crear Nuevo Producto'}
      </Typography>

      <Stack spacing={2}>
        
        <TextField 
          label="Nombre" 
          name="nombre" 
          value={getValue('nombre')} 
          onChange={onChange} 
          required 
        />

        <Stack direction="row" spacing={2}>
          <TextField 
            fullWidth
            label="SKU" 
            name="sku" 
            value={getValue('sku')} 
            onChange={onChange} 
          />
          <TextField 
            fullWidth
            label="Slug" 
            name="slug" 
            value={getValue('slug')} 
            onChange={onChange} 
          />
        </Stack>

        <TextField 
          label="Descripción" 
          name="descripcion" 
          multiline
          rows={3}
          value={getValue('descripcion')} 
          onChange={onChange} 
        />

        <Stack direction="row" spacing={2}>
          <TextField 
            fullWidth
            type="number"
            label="Precio (S/)" 
            name="precio" 
            value={getValue('precio')} 
            onChange={onChange} 
          />
          <TextField 
            fullWidth
            type="number"
            label="Stock Actual" 
            name="stock_actual" 
            value={getValue('stock_actual')} 
            onChange={onChange} 
          />
          <TextField 
            fullWidth
            type="number"
            label="Stock Mínimo" 
            name="stock_minimo" 
            value={getValue('stock_minimo')} 
            onChange={onChange} 
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          {/* AQUÍ ESTÁ EL CAMBIO: Ahora es un Select */}
          <TextField 
            fullWidth
            select
            label="Categoría" 
            name="categoria_id" 
            value={getValue('categoria_id')} 
            onChange={onChange} 
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

          <TextField 
            fullWidth
            label="Material" 
            name="material" 
            value={getValue('material')} 
            onChange={onChange} 
          />
        </Stack>

        <TextField 
          label="URLs de Fotos (separadas por coma)" 
          name="fotos" 
          value={getValue('fotos')} 
          onChange={onChange} 
        />

        <FormControlLabel
          control={
            <Checkbox 
              name="activo" 
              checked={formData?.activo || false} 
              onChange={onChange} 
            />
          }
          label="Activo"
        />

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            {editingId ? 'Actualizar Producto' : 'Guardar Producto'}
          </Button>
          
          {editingId && (
            <Button type="button" onClick={onCancel} variant="outlined" color="error">
              Cancelar
            </Button>
          )}
        </Stack>

      </Stack>
    </Box>
  );
};