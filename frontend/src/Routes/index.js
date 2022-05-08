import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from '../Pages/ProductsPage';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import Cart from '../Pages/CartPage';
const AllRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/products/:_id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllRouting;
