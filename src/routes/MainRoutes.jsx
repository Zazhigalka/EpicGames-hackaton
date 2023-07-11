import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import NotFound from "../components/notfound/NotFound";
import Cart from "../components/cart/Cart";
import WishList from "../components/wishList/WishList";
import WishListPage from "../pages/WishListPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/" element={<ProductDetailsPage />} />
      <Route path="/wish-list" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
