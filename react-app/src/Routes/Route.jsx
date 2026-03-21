import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Registros from '../pages/Registros';
import Productos from '../pages/productos';
import ProductDetail from '../pages/Product_detail';
import CartPage from '../pages/CartPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registros/>} />
            <Route path="/product_detail" element={<ProductDetail/>} />
            <Route path="/productos" element={<Productos/>} /> 
            <Route path="/cart" element={<CartPage/>} />          
            
        </Routes>
    );
};

export default AppRoutes;
