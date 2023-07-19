import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import addIcon from "../../assets/add-to.png";
import isAdded from "../../assets/complete.svg";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useCart } from "../../contexts/CartContextProvider";

const ProductCard = ({ item }) => {
  const [iconPlus, setIconPlus] = useState(false);
  const { deleteFromFavorites, getFavorites, toggleFavorites } = useProduct();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    getFavorites();
  }, []);

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };

  const navigate = useNavigate();

  const path = document.location.pathname;

  const handleClick = () => {
    toggleFavorites(item.id);
    setIsFavorited(true);
    if (isFavorited) {
      deleteFromFavorites(item.id);
      setIsFavorited(false);
    }
  };

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
          src={isFavorited ? isAdded : addIcon}
          id="card__add_icon"
          alt=""
          title={
            isFavorited
              ? "Уже в списке желаемого"
              : "Добавить в список желаемого"
          }
          onClick={handleClick}
        />
      ) : null}
      <Card.Body className="card__body">
        <Card.Text className="card__osob">Особенности</Card.Text>
        <Card.Title className="card__title">{item.title_of_game}</Card.Title>
        <Card.Text className="card__price">
          {item.price == 0 ? "Бесплатно" : `${item.price} $`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
