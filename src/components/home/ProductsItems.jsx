import React, { useState } from "react";
import "./productItems.css";
import addToWish from "../../assets/add-to.png";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const ProductsItems = ({ item }) => {
  const [iconPlus, setIconPlus] = useState(false);
  const navigate = useNavigate();
  const { toggleFavorites } = useProduct();

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };
  return (
    <div className="home__fifth_items" onMouseLeave={handleMouseLeave}>
      <img
        src={item.preview}
        alt=""
        className="home__fifth_items-img"
        onMouseEnter={handleMouseEnter}
        onClick={() => navigate(`/product/${item.id}`)}
      />
      {iconPlus ? (
        <img
          src={addToWish}
          alt=""
          className="home__fifth_add"
          title="В список желания"
          onClick={() => toggleFavorites(item.id)}
        />
      ) : null}
      <p className="home__fifth_items-game">Базовая игра</p>
      <p className="home__fifth_items-title">{item.title_of_game}</p>
      <p className="home__fifth_items-price">
        {item.price == 0 ? "Бесплатно" : item.price}
      </p>
    </div>
  );
};

export default ProductsItems;
