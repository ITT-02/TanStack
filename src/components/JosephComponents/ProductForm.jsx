import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import NumberField from './NumberField';

export const ProductForm = ({
  editingId,
  formData,
  onCancel,
  onChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <Card>
      <CardContent sx={{ mt: 4, width: '50%', alignContent: 'center', margin: '0 auto' }}>
        <form onSubmit={onSubmit}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {editingId ? 'Editar producto' : 'Agregar producto'}
          </Typography>

          <Stack spacing={2}>
            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                SKU:
              </Typography>
              <TextField
                id="sku"
                name="sku"
                type="text"
                onChange={onChange}
                value={formData.sku}
                required
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Nombre:
              </Typography>
              <TextField
                id="nombre"
                name="nombre"
                type="text"
                onChange={onChange}
                value={formData.nombre}
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Slug:
              </Typography>
              <TextField
                id="slug"
                name="slug"
                type="text"
                onChange={onChange}
                value={formData.slug}
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Descripcion:
              </Typography>
              <TextField
                id="descripcion"
                name="descripcion"
                onChange={onChange}
                value={formData.descripcion}
                multiline
                rows={4}
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Precio:
              </Typography>
              <NumberField
                id="precio"
                name="precio"
                label="Precio"
                min={0}
                step={0.01}
                value={formData.precio === '' ? null : Number(formData.precio)}
                onValueChange={(value) => onNumberChange('precio', value)}
                helperText="Ingresa el precio del producto"
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Stock actual:
              </Typography>
              <NumberField
                id="stock_actual"
                name="stock_actual"
                label="Stock actual"
                min={0}
                step={1}
                value={
                  formData.stock_actual === '' ? null : Number(formData.stock_actual)
                }
                onValueChange={(value) => onNumberChange('stock_actual', value)}
                helperText="Cantidad disponible en inventario"
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Stock minimo:
              </Typography>
              <NumberField
                id="stock_minimo"
                name="stock_minimo"
                label="Stock minimo"
                min={0}
                step={1}
                value={
                  formData.stock_minimo === '' ? null : Number(formData.stock_minimo)
                }
                onValueChange={(value) => onNumberChange('stock_minimo', value)}
                helperText="Cantidad minima antes de reponer"
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Categoria ID:
              </Typography>
              <TextField
                id="categoria_id"
                name="categoria_id"
                type="text"
                onChange={onChange}
                value={formData.categoria_id}
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Material:
              </Typography>
              <TextField
                id="material"
                name="material"
                type="text"
                onChange={onChange}
                value={formData.material}
              />
            </div>

            <div>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Fotos:
              </Typography>
              <TextField
                id="fotos"
                name="fotos"
                placeholder="Separa varias fotos por coma"
                onChange={onChange}
                value={formData.fotos}
                multiline
                rows={3}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  id="activo"
                  name="activo"
                  onChange={onChange}
                  checked={formData.activo}
                />
              }
              label="Activo"
            />

            <Stack direction="row" spacing={2}>
              <Button type="submit" variant="contained">
                {editingId ? 'Actualizar producto' : 'Agregar producto'}
              </Button>

              {editingId && (
                <Button type="button" onClick={onCancel} variant="outlined">
                  Cancelar edicion
                </Button>
              )}
            </Stack>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};
