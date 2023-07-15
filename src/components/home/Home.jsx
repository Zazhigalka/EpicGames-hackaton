import React, { useState } from "react";
import Search from "../search/Search";
import "./home.css";
import HomeCarousel from "./HomeCarousel";
import addToWish from "../../assets/add-to.png";

const Home = () => {
  // home second
  const [iconPlus, setIconPlus] = useState(false);
  const [secondIconPlus, setSecondIconPlus] = useState(false);

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };

  const handleSecondMouseEnter = () => {
    setSecondIconPlus(true);
  };

  const handleSecondMouseLeave = () => {
    setSecondIconPlus(false);
  };
  // home second

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
      {/* home second */}
      <div className="home__second">
        <div className="home__second_products">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <img
              className="home__second_img"
              src="https://d.newsweek.com/en/full/895239/god-war-4-trophy-guide-complete-list-all-how-get-gold-silver-bronze-platinum.jpg?w=1600&h=900&q=88&f=9f956e01f14bb50bd8c38f9793d10384"
              alt=""
            />
            {iconPlus ? (
              <img
                className="home__second_add"
                src={addToWish}
                alt=""
                title="В список желания"
              />
            ) : null}
          </div>
          <p className="home__second_title">God of War</p>
          <p className="home__second_descr">
            Отомстив богам Олимпа, Кратос поселился в царстве скандинавских
            божеств и чудовищ. В этом суровом беспощадном мире он должен не
            только самостоятельно бороться за выживание... но и научить этому
            сына.
          </p>
          <p className="home__second_price">39,99 $</p>
        </div>
        <div className="home__second_products">
          <div
            onMouseEnter={handleSecondMouseEnter}
            onMouseLeave={handleSecondMouseLeave}
            style={{ position: "relative" }}
          >
            <img
              className="home__second_img"
              src="https://assets.altarofgaming.com/wp-content/uploads/2021/11/valorant-game-cover-altar-of-gaming.jpg"
              alt=""
            />
            {secondIconPlus ? (
              <img
                className="home__second_add"
                src={addToWish}
                alt=""
                title="В список желания"
              />
            ) : null}
          </div>
          <p className="home__second_title">VALORANT</p>
          <p className="home__second_descr">
            VALORANT - командный шутер 5 на 5 с уникальными навыками,
            стратегиями и захватывающими битвами на разнообразных аренах,
            предлагающий увлекательное действие и соревновательную атмосферу.
          </p>
          <p className="home__second_price">Бесплатно</p>
        </div>
      </div>
      {/* home second */}
    </div>
  );
};

export default Home;
