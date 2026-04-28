import {Box,
  Card,
  TextField,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
  Button,
  CardContent} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

export const ProductForm = ({
  editingId=null,
  formData=null,
  onCancel=null,
  onChange=null,
  onSubmit=null,
}) => {
  return (
    <Box sx={{ mt: 4, width: '50%', alignContent: 'center', margin: '0 auto' }}>
      <Card sx={{ p: 2, mb: 2 }}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {editingId ? 'Editar producto' : 'Agregar producto'}
            </Typography>

            <Stack spacing={2}>

              <TextField label="SKU" name="sku" onChange={onChange} value={formData?.sku} />
              <TextField label="Nombre" name="nombre" onChange={onChange} value={formData?.nombre} />
              <TextField label="Slug" name="slug" onChange={onChange} value={formData?.slug} />
              <TextField label="Descripción" name="descripcion" onChange={onChange} value={formData?.descripcion} multiline rows={4} /> 
              <TextField label="Precio" name="precio" type="number" onChange={onChange} value={formData?.precio} />
              <TextField label="Stock actual" name="stock_actual" type="number" onChange={onChange} value={formData?.stock_actual} />
              <TextField label="Stock mínimo" name="stock_minimo" type="number" onChange={onChange} value={formData?.stock_minimo} />
              <TextField label="Categoría ID" name="categoria_id" onChange={onChange} value={formData?.categoria_id} />
              <TextField label="Material" name="material" onChange={onChange} value={formData?.material} />
              <TextField label="Fotos" name="fotos" placeholder="Separa varias fotos por coma" onChange={onChange} value={formData?.fotos} />
              
            </Stack>

            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', mt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="activo"
                    name="activo"
                    onChange={onChange}
                    checked={formData?.activo}
                  />
                }
                label="Activo"
              />
            </Stack>

            <Box sx={{ mt: 2, display: 'grid', gap: 3}}>
              <Button type="submit" variant="contained" size="medium" color="primary" endIcon={<AddIcon />} sx={{ mt: 2 }}>
                {editingId ? 'Actualizar producto' : 'Agregar producto'}
              </Button>



              {editingId && (
                <Button type="button" onClick={onCancel} variant="outlined" color="secondary" sx={{ mt: 2, ml: 2 }}>
                  Cancelar edición
                </Button>
              )}
            </Box>
              
          </form>        
        </CardContent>
      </Card>      
    </Box>
  );
};