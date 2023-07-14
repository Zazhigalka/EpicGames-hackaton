import React from "react";
import Search from "../search/Search";
import "./home.css";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div className="home__page">
      <div
        style={{
          position: "sticky",
          top: "0px",
          left: "0",
          right: "0",
          zIndex: 10,
        }}
      >
        <Search />
      </div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
