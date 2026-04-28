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

export const CategoryForm = ({
  editingId,
  formData,
  onCancel,
  onChange,
  onSubmit,
}) => {
  return (
    <Box sx={{ mt: 4, width: '50%', alignContent: 'center', margin: '0 auto' }}>
      <Card sx={{ p: 2, mb: 2 }}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {editingId ? 'Editar categoría' : 'Agregar categoría'}
            </Typography>

            <Stack spacing={2}>
              <TextField 
                label="Nombre" 
                name="nombre" 
                onChange={onChange} 
                value={formData?.nombre || ''} 
                required 
              />
              <TextField 
                label="Slug" 
                name="slug" 
                onChange={onChange} 
                value={formData?.slug || ''} 
                required 
              />
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
                {editingId ? 'Actualizar categoría' : 'Agregar categoría'}
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