import React from "react";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import Distribution from "../components/distribution/Distribution";

import NotFound from "../components/notfound/NotFound";
import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/distribution" element={<Distribution />} />
      <Route path="/product/" element={<ProductDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
