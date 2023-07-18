import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import addIcon from "../../assets/add-to.png";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const [iconPlus, setIconPlus] = useState(false);

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };
  const navigate = useNavigate();

  const { toggleFavorites } = useProduct();
  const path = document.location.pathname;

  return (
    <Card className="card__container">
      <Card.Img
        className="card__image"
        variant="top"
        onMouseEnter={handleMouseEnter}
        src={item.preview}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`/product/${item.id}`)}
      />
      <div id="card__back"></div>
      {iconPlus ? (
        <img
          onMouseEnter={handleMouseEnter}
          src={addIcon}
          id="card__add_icon"
          alt=""
          title="В список желаемого"
          onClick={() => toggleFavorites(item.id)}
        />
      ) : null}
      <Card.Body className="card__body">
        <Card.Text className="card__osob">Особенности</Card.Text>
        <Card.Title className="card__title">{item.title_of_game}</Card.Title>
        <Card.Text className="card__price">{item.price} $</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
