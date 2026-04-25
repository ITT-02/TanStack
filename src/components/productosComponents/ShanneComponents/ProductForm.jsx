import { Box, Stack, Typography, Button } from '@mui/material';

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const labelStyle = {
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#757575',
};

const inputStyle = {
  fontSize: '15px',
  padding: '12px 14px',
  background: '#fafafa',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  color: '#212121',
  outline: 'none',
  fontFamily: 'inherit',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const sectionCardStyle = {
  background: '#ffffff',
  borderRadius: '14px',
  padding: '20px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
  border: '1px solid rgba(0,0,0,0.04)',
};

const sectionTitleStyle = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#bdbdbd',
  margin: '0 0 14px',
};

const Field = ({ label, name, type = 'text', placeholder, value, onChange, multiline, rows }) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    {multiline ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
        rows={rows ?? 3}
        style={{
          ...inputStyle,
          resize: 'vertical',
          minHeight: '90px',
          lineHeight: 1.5,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#bdbdbd';
          e.target.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.03)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#e0e0e0';
          e.target.style.boxShadow = 'none';
        }}
      />
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = '#bdbdbd';
          e.target.style.boxShadow = '0 0 0 3px rgba(0,0,0,0.03)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#e0e0e0';
          e.target.style.boxShadow = 'none';
        }}
      />
    )}
  </div>
);

export const ProductForm = ({
  editingId = null,
  formData = null,
  onCancel = null,
  onChange = null,
  onSubmit = null,
}) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ maxWidth: 560, width: '100%', mx: 'auto', mt: 5, px: 2, pb: 6 }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#212121',
          mb: 0.5,
          letterSpacing: '-0.02em',
        }}
      >
        {editingId ? 'Editar producto' : 'Agregar producto'}
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          color: '#9e9e9e',
          mb: 4,
        }}
      >
        {editingId ? 'Modifica los datos del producto seleccionado.' : 'Completa los campos para crear un nuevo producto.'}
      </Typography>
      {/* Identificación */}
      <Box sx={{ mb: 3, ...sectionCardStyle }}>
        <p style={sectionTitleStyle}>Identificación</p>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <Field label="SKU" name="sku" placeholder="SKU-001" value={formData?.sku} onChange={onChange} />
          <Field label="Slug" name="slug" placeholder="mi-producto" value={formData?.slug} onChange={onChange} />
        </Box>
      </Box>
      {/* Información */}
      <Box sx={{ mb: 3, ...sectionCardStyle }}>
        <p style={sectionTitleStyle}>Información</p>
        <Stack gap="14px">
          <Field label="Nombre" name="nombre" placeholder="Nombre del producto" value={formData?.nombre} onChange={onChange} />
          <Field label="Descripción" name="descripcion" placeholder="Describe el producto..." value={formData?.descripcion} onChange={onChange} multiline rows={3} />
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <Field label="Material" name="material" placeholder="Ej: Algodón" value={formData?.material} onChange={onChange} />
            <Field label="Categoría ID" name="categoria_id" placeholder="ID numérico" value={formData?.categoria_id} onChange={onChange} />
          </Box>
        </Stack>
      </Box>
      {/* Precio y stock */}
      <Box sx={{ mb: 3, ...sectionCardStyle }}>
        <p style={sectionTitleStyle}>Precio y stock</p>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
          <Field label="Precio" name="precio" type="number" placeholder="0.00" value={formData?.precio} onChange={onChange} />
          <Field label="Stock actual" name="stock_actual" type="number" placeholder="0" value={formData?.stock_actual} onChange={onChange} />
          <Field label="Stock mínimo" name="stock_minimo" type="number" placeholder="0" value={formData?.stock_minimo} onChange={onChange} />
        </Box>
      </Box>
      {/* Multimedia */}
      <Box sx={{ mb: 3, ...sectionCardStyle }}>
        <p style={sectionTitleStyle}>Multimedia</p>
        <Stack gap="16px">
          <Field
            label="Fotos (separadas por coma)"
            name="fotos"
            placeholder="https://ejemplo.com/foto1.jpg, https://ejemplo.com/foto2.jpg"
            value={formData?.fotos}
            onChange={onChange}
          />
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="activo"
              checked={formData?.activo ?? false}
              onChange={onChange}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer',
                accentColor: '#212121',
              }}
            />
            <span style={{ fontSize: '14px', color: '#616161', fontWeight: 500 }}>Producto activo</span>
          </label>
        </Stack>
      </Box>
      {/* Acciones */}
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          mt: 4,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          disableElevation
          sx={{
            flex: 1,
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.01em',
            textTransform: 'none',
            borderRadius: '10px',
            bgcolor: '#212121',
            color: '#fff',
            py: '12px',
            transition: 'all 0.2s ease',
            '&:hover': { bgcolor: '#424242', transform: 'translateY(-1px)' },
          }}
        >
          {editingId ? 'Actualizar producto' : 'Agregar producto'}
        </Button>
        {editingId && (
          <Button
            type="button"
            onClick={onCancel}
            variant="outlined"
            disableElevation
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: '10px',
              borderColor: '#e0e0e0',
              color: '#757575',
              py: '12px',
              px: 3,
              transition: 'all 0.2s ease',
              '&:hover': { borderColor: '#bdbdbd', bgcolor: '#fafafa' },
            }}
          >
            Cancelar
          </Button>
        )}
      </Box>
    </Box>
  );
};

