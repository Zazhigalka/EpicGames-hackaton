import React from "react";
import Auth from "../components/auth/Auth";
import Search from "../components/search/Search";

const AuthPage = () => {
  return (
    <>
      <div style={{ position: "sticky", top: "0", left: "0", right: "0" }}>
        <Search />
      </div>
      <Auth />
    </>
  );
};

export default AuthPage;
