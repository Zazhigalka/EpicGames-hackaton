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
      {/* home third */}
      <div className="home__third">
        <div className="home__third_products">
          <p className="home__third_main-title">Лучшие по оценкам</p>
          <ul className="home__third_list">
            <li className="home__third_items">
              <img
                src="https://picfiles.alphacoders.com/198/thumb-198639.jpg"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">
                  Red Dead Redemption II
                </p>
                <p className="home__third_items-price">39,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://m.media-amazon.com/images/I/71DRhS9jOeL._AC_UF894,1000_QL80_.jpg"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">God of War</p>
                <p className="home__third_items-price">39,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">GTA V</p>
                <p className="home__third_items-price">24,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">
                  Ведьмак 3: Дикая Охота
                </p>
                <p className="home__third_items-price">24,96 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">Одни из нас™: Часть I</p>
                <p className="home__third_items-price">49,99 $</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="home__third_products"
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p className="home__third_main-title">Самые популярные</p>
          <ul className="home__third_list">
            <li className="home__third_items">
              <img
                src="https://cdn1.epicgames.com/offer/fn/25BR_S25_EGS_Launcher_Blade_1200x1600_1200x1600-1127a3b880c3b307cbd13d9fd3dd8495?h=480&quality=medium&resize=1&w=360"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">Fortnite</p>
                <p className="home__third_items-price">Бесплатно</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">GTA V</p>
                <p className="home__third_items-price">24,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-b911781672bac23a556586fb92c42983?h=480&quality=medium&resize=1&w=360"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">VALORANT</p>
                <p className="home__third_items-price">Бесплатно</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn2.unrealengine.com/fc24set-epic-portrait-product-image-1200x1600-1200x1600-dfe2373ee736.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">EA SPORTS FC™ 24</p>
                <p className="home__third_items-price">69,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc?h=480&quality=medium&resize=1&w=360"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">Genshin Impact</p>
                <p className="home__third_items-price">Бесплатно</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="home__third_products">
          <p className="home__third_main-title">Новые игры</p>
          <ul className="home__third_list">
            <li className="home__third_items">
              <img
                src="https://s.pacn.ws/1/p/160/only-up-756411.1.jpg?v=rvgx4p"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">Only Up</p>
                <p className="home__third_items-price">12,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://cdn2.unrealengine.com/fc24set-epic-portrait-product-image-1200x1600-1200x1600-dfe2373ee736.jpg?h=128&quality=medium&resize=1&w=96"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">EA SPORTS FC™ 24</p>
                <p className="home__third_items-price">69,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/Mortal_Kombat_1_%282023%29_cover.jpeg/274px-Mortal_Kombat_1_%282023%29_cover.jpeg"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">Mortal Combat I</p>
                <p className="home__third_items-price">64,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://i.pinimg.com/originals/1b/0c/f1/1b0cf171f736a3e702b0afe776346fb5.jpg"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">MARVEL: Spider-Man 2</p>
                <p className="home__third_items-price">69,99 $</p>
              </div>
            </li>
            <li className="home__third_items">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/6/6e/God_of_War-_Ragnar%C3%B6k.jpg"
                alt=""
                className="home__third_items-img"
              />
              <div className="home__third_items-descr">
                <p className="home__third_items-title">God of War: РАГНАРЁК</p>
                <p className="home__third_items-price">59,99 $</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* home third */}
      {/* home fourth */}
      <div className="home__second">
        <div className="home__second_products">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <img
              className="home__second_img"
              src="https://wallpapershome.ru/images/wallpapers/poster-3840x2160-poster-18222.jpg"
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
          <p className="home__second_title">Red Dead Redemption II</p>
          <p className="home__second_descr">
            Red Dead Redemption 2 - захватывающая приключенческая игра в
            открытом мире. Исследуй Дикий Запад, сражайся, охоться и строй свой
            путь в этой эпической истории о преступности и выживании.
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
              src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg"
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
          <p className="home__second_title">Одни из нас™: Часть II</p>
          <p className="home__second_descr">
            Одни из нас часть вторая - захватывающий сюжетный хоррор с
            выживанием. Выжившие сражаются с зараженными, раскрывая темные тайны
            в опустошенном мире.
          </p>
          <p className="home__second_price">49,99 $</p>
        </div>
      </div>
      {/* home fourth */}
    </div>
  );
};

export default Home;
