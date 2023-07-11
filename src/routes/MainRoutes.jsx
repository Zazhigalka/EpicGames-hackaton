import React from "react";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import Distribution from "../components/distribution/Distribution";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import WishListPage from "../pages/WishListPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/distribution" element={<Distribution />} />
      <Route path="/product/" element={<ProductDetailsPage />} />
      <Route path="/wish-list" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
