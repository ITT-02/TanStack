import { Typography } from '@mui/material'
import React from 'react'

export const WelcomePage = () => {
  return (
    <>
      <Typography variant='h1'>¡Bienvenido a nuestra aplicación!</Typography>
      <Typography variant='body1' style={{ marginTop: '20px' }}>
        En esta página podrás ver y modificar los productos de la tienda y sus categorías.
        Cambia de menú con la barra superior. 
      </Typography>
    </>
  )
}
