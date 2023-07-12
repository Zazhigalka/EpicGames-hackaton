import React from 'react';
import './ProductDetails.css';
import { Button, Container } from 'react-bootstrap';
import CarouselBox from '../Carousel/CarouselBox';
import addTo from '../../assets/add-to.png';
import shareIcon from '../../assets/share.png';
import reportIcon from '../../assets/flag.png';

const ProductDetails = () => {
  return (
    <div style={{ backgroundColor: '#121212', marginTop: '200px' }}>
      <div className="product-details-container">
        <div className="product-details-left">
          <h3>Fortnite</h3>
          <div className="product-details-rating">
            <div className="raiting-on-num">4.3</div>
          </div>
          <h5>Обзор</h5>
          <CarouselBox />
        </div>
        <div className="product-details-right">
          <div className="product-logo-block">
            <img
              src="https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480"
              alt=""
              className="product-logo"
            />
          </div>
          <div className="base-game">Базовая игра</div>

          <Button variant="warning w-100 p-2 mt-3">Получить</Button>
          <Button
            className="outlined-btn"
            variant="outline-light p-2 w-100 mt-3">
            Добавить в корзину
          </Button>
          <Button
            className="outlined-btn"
            variant="outline-light w-100 mt-3 p-1">
            <img width={20} src={addTo} alt="" /> В список желаемого
          </Button>

          <ul className="product-details__more-about-product-list">
            <li>
              <h6>Разработчик</h6>
              <p>Epic Games</p>
            </li>

            <li>
              <h6>Издатель</h6>
              <p>Epic Games</p>
            </li>
            <li>
              <h6>Дата выхода</h6>
              <p>21.07.17</p>
            </li>
            <li>
              <h6>Изначальный выпуск</h6>
              <p>21.07.17</p>
            </li>
            <li>
              <h6>Платформа</h6>
              <img src="" alt="" />
            </li>
          </ul>
          <Button className="outlined-btn" variant="outline-light w-100 mt-3">
            <img width={20} src={shareIcon} alt="" /> В список желаемого
          </Button>
          <Button className="outlined-btn" variant="outline-light w-100 mt-3">
            <img width={20} src={reportIcon} alt="" /> В список желаемого
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
