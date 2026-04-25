import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import NumberField from '../NumberField';
export const CategoriaForm = ({
  editingId,
  formData,
  onCancel,
  onChange,
  onSubmit,
}) => {
  return (
    <Card>
      <CardContent sx={{ mt: 4, width: '50%', alignContent: 'center', margin: '0 auto' }}>
        <form onSubmit={onSubmit}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {editingId ? 'Editar categoria' : 'Agregar Categoria'}
          </Typography>

          <Stack spacing={2}>         

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
