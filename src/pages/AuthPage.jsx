import React, { useState } from "react";
import Auth from "../components/auth/Auth";
import Search from "../components/search/Search";
import Register from "../components/auth/Register";

const AuthPage = () => {
  return (
    <div className="container__auth">
      <Auth />
    </div>
  );
};

export default AuthPage;
