import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import addIcon from "../../assets/add-to.png";

const ProductCard = ({ item }) => {
  const [iconPlus, setIconPlus] = useState(false);

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };

  return (
    <Card className="card__container">
      <Card.Img
        className="card__image"
        variant="top"
        onMouseEnter={handleMouseEnter}
        src={item.preview}
        onMouseLeave={handleMouseLeave}
      />
      <div id="card__back"></div>
      {iconPlus ? (
        <img
          onMouseEnter={handleMouseEnter}
          src={addIcon}
          id="card__add_icon"
          alt=""
          title="В список желаемого"
        />
      ) : null}
      <Card.Body className="card__body">
        <Card.Text className="card__osob">Особенности</Card.Text>
        <Card.Title className="card__title">{item.title_of_game}</Card.Title>
        <Card.Text className="card__price">14,99 $</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
