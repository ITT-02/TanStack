import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export const ProductList = ({ products, onEdit, onDelete }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  if (safeProducts.length === 0) {
    return (
      <Card>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6">No hay productos registrados.</Typography>

          <Typography variant="body2" color="text.secondary">
            Cuando registres un producto, aparecerá en esta lista.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Lista de productos
      </Typography>

      <Box
        sx={{
          maxHeight: { xs: 'none', lg: '550px' },
          overflowY: { xs: 'visible', lg: 'auto' },
          pr: { xs: 0, lg: 1 },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Grid container spacing={2}>
          {safeProducts.map((product) => (
            <Grid key={product.id} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}
                >
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
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
                      <Typography variant="h6">{product.nombre}</Typography>

                      <Typography variant="body2" color="text.secondary">
                        SKU: {product.sku}
                      </Typography>
                    </Box>
                  </Stack>

                  <Chip
                    label={product.activo ? 'Activo' : 'Inactivo'}
                    color={product.activo ? 'success' : 'default'}
                    size="small"
                    variant={product.activo ? 'filled' : 'outlined'}
                  />
                </Stack>

                <Divider sx={{ mb: 2 }} />

                <Stack spacing={1}>
                  <Typography variant="body2">
                    <strong>Precio:</strong> S/ {product.precio}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Slug:</strong> {product.slug}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Descripción:</strong>{' '}
                    {product.descripcion || 'Sin descripción'}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Stock actual:</strong> {product.stock_actual}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Stock mínimo:</strong> {product.stock_minimo}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Categoría:</strong>{' '}
                    {product.categorias?.nombre || product.categoria_id}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Material:</strong> {product.material || 'Sin material'}
                  </Typography>

                  <Typography variant="body2">
                    <strong>Fotos:</strong>{' '}
                    {Array.isArray(product.fotos) && product.fotos.length > 0
                      ? product.fotos.join(', ')
                      : 'Sin fotos'}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
                  <Button
                    type="button"
                    variant="outlined"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => onEdit(product)}
                  >
                    Editar
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDelete(product.id)}
                  >
                    Eliminar
                  </Button>
                </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
