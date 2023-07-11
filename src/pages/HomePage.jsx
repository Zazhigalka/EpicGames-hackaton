import React from "react";
import Home from "../components/home/Home";
import Search from "../components/search/Search";

const HomePage = () => {
  return (
    <div>
      <div style={{ position: "fixed", left: "0", right: "0" }}>
        <Search />
      </div>
      <Home />
    </div>
  );
};

export default HomePage;
