import { Box, TextField, Typography, Button, Stack, FormControlLabel, Checkbox } from '@mui/material';

export const CategoriasForm = ({ editingId, formData, onChange, onSubmit, onCancel }) => {
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" mb={2}>
        {editingId ? 'Editar Categoría' : 'Crear Categoría'}
      </Typography>
      <Stack spacing={2}>
        <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={onChange} required />
        <TextField label="Slug" name="slug" value={formData.slug} onChange={onChange} required />
        <FormControlLabel
          control={<Checkbox name="activo" checked={formData.activo} onChange={onChange} />}
          label="Activo"
        />
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained">{editingId ? 'Actualizar' : 'Guardar'}</Button>
          {editingId && <Button onClick={onCancel} variant="outlined" color="error">Cancelar</Button>}
        </Stack>
      </Stack>
    </Box>
  );
};