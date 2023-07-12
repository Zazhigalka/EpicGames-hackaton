import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";

const ProductCard = () => {
  return (
    <Card className="card__container">
      <Card.Img
        className="card__image"
        variant="top"
        src="https://cdn1.epicgames.com/spt-assets/f0acf862224f49ffb0a5295b30ff67f0/need-for-spirit-drink-and-drive-simulator-8khcn.jpg?h=480&quality=medium&resize=1&w=360"
      />
      <Card.Body className="card__body">
        <Card.Text className="card__osob">Особенности</Card.Text>
        <Card.Title className="card__title">Название игры</Card.Title>
        <Card.Text className="card__price">14,99 $</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
