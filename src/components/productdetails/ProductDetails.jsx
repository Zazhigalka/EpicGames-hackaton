import React from "react";
import "./ProductDetails.css";
import { Button, Container } from "react-bootstrap";
import addTo from "../assets/add-to.png";

const ProductDetails = () => {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <div className="product-details-container">
        <div className="product-details-left">
          <h3>Fortnite</h3>
          <h5>Обзор</h5>
          <CarouselBox />
        </div>
        <div className="product-details-right">
          <img
            src="https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480"
            alt=""
            className="product-logo"
          />
          <div className="base-game">Базовая игра</div>

          <Button variant="warning w-100 p-3 mt-3">Получить</Button>
          <Button variant="outline-light p-3 w-100 mt-3">
            Добавить в корзину
          </Button>
          <Button variant="outline-light w-100 mt-3">
            <img width={20} src={addTo} alt="" /> В список желаемого
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
