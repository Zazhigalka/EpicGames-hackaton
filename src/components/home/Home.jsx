import React from "react";
import Search from "../search/Search";

const Home = () => {
  return (
    <div>
      <div style={{ position: "sticky", top: "0px", left: "0", right: "0" }}>
        <Search />
      </div>
    </div>
  );
};

export default Home;
