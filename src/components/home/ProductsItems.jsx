import React, { useState } from "react";
import "./productItems.css";
import addToWish from "../../assets/add-to.png";

const ProductsItems = () => {
  const [iconPlus, setIconPlus] = useState(false);

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };
  return (
    <div className="home__fifth_items" onMouseLeave={handleMouseLeave}>
      <img
        src="https://cdn1.epicgames.com/spt-assets/14eb3477a6084940b49de5aa73c60f98/mammoth-tfbxg.jpg?h=480&quality=medium&resize=1&w=360"
        alt=""
        className="home__fifth_items-img"
        onMouseEnter={handleMouseEnter}
      />
      {iconPlus ? (
        <img
          src={addToWish}
          alt=""
          className="home__fifth_add"
          title="В список желания"
        />
      ) : null}
      <p className="home__fifth_items-game">Базовая игра</p>
      <p className="home__fifth_items-title">PAYDAY 2</p>
      <p className="home__fifth_items-price">4,49 $</p>
    </div>
  );
};

export default ProductsItems;
