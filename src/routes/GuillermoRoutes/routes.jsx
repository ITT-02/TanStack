import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WelcomePage } from '../../pages/categoriasPages/GuillermoPages/WelcomePage';
import { CategoriesPage } from '../../pages/categoriasPages/GuillermoPages/CategoriesPage';
import { ProductosPage } from '../../pages/categoriasPages/GuillermoPages/ProductosPage';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
