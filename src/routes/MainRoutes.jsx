import React from 'react';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import WishListPage from '../pages/WishListPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import DistributionPage from '../pages/DistributionPage';
import ProductsPage from '../pages/ProductsPage';
import RegisterPage from '../pages/RegisterPage';
import News from '../components/news/News';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/distribution" element={<DistributionPage />} />
      <Route path="/product/" element={<ProductDetailsPage />} />
      <Route path="/wish-list" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default MainRoutes;
