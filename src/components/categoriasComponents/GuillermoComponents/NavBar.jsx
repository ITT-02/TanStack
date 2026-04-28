import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={3}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '.1rem' }}
          >
            Tienda Online
          </Typography>

          {/* Menú de Navegación */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant='contained'
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ ml: 2, mr: 1 }}
            >
              Inicio
            </Button>

            <Button
              variant='outlined'
              color="inherit" 
              component={Link} 
              to="/productos"
              sx={{ ml: 1, mr: 1 }}
            >
              Productos
            </Button>

            <Button 
              variant="outlined" 
              color="inherit" 
              component={Link} 
              to="/categories"
              sx={{ ml: 1, mr: 2 }}
            >
              Categorías
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};