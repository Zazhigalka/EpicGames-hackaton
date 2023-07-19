import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import addIcon from "../../assets/add-to.png";
import isAdded from "../../assets/complete.svg";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import inFavorites from "../../assets/complete.svg";

const ProductCard = ({ item }) => {
  const [iconPlus, setIconPlus] = useState(false);
  const { getProducts, products, getFavorites, toggleFavorites } = useProduct();

  useEffect(() => {
    getProducts();
    getFavorites();
  }, []);

  const handleClick = (id) => {
    toggleFavorites(id);
    if (products) {
      let filtered = products.filter((item) => item.id === id);
      return filtered[0]?.is_favorite || false;
    }
    return false;
  };
  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };

  const navigate = useNavigate();

  return (
    <Card className="card__container">
      <Card.Img
        className="card__image"
        variant="top"
        onMouseEnter={handleMouseEnter}
        src={item?.preview}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`/product/${item.id}`)}
      />
      <div id="card__back"></div>
      {iconPlus ? (
        <img
          onMouseEnter={handleMouseEnter}
          src={handleClick() ? inFavorites : addIcon}
          id="card__add_icon"
          alt=""
          title={
            handleClick
              ? "Уже в списке желаемого"
              : "Добавить в список желаемого"
          }
          onClick={() => handleClick(item.id)}
        />
      ) : null}
      <Card.Body className="card__body">
        <Card.Text className="card__osob">{item.category}</Card.Text>
        <Card.Title className="card__title">{item.title_of_game}</Card.Title>
        <Card.Text className="card__price">
          {item.price == 0 ? "Бесплатно" : `${item.price} $`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
