import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import Distribution from "../components/distribution/Distribution";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/distribution" element={<Distribution />} />
    </Routes>
  );
};

export default MainRoutes;
