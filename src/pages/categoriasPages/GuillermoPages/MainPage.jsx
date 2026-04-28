import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './CategoriesPage'
import { AppRoutes } from '../../../routes/GuillermoRoutes/routes';
import { Navbar } from '../../../components/categoriasComponents/GuillermoComponents/NavBar';

export const MainPage = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    </>
  )
}
