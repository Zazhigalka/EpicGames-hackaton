import React from "react";
import "./homeCarousel.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeCarousel = () => {
  const navigate = useNavigate();
  return (
    <div className="home__carousel">
      <div
        className="home__carousel_left"
        // onClick={() => navigate("/product/")}
      >
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/egs-spider-man-miles-morales-carousel-desktop-1248x702-0cbd7e91abd2.jpg?h=720&quality=medium&resize=1&w=1280"
              alt="Spider-Man"
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3>MARVEL: Spider-Man</h3>
              <p>
                Когда его дому грозит страшная опасность, Майлз надевает костюм
                и становится Человеком-Пауком.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/egs-ac-mirage-carousel-desktop-1920x1080-b74b6e380b4d.jpg?h=720&quality=medium&resize=1&w=1280"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/01-25br-s25-egs-launcher-pdp-2560x1440-2560x1440-92db8752f5af.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
              alt="Third slide"
              style={{ opacity: 0.8 }}
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/egs-easportsfc24standardedition-eacanada-g1a-04-1920x1080-18bdc49a686e.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/egs-prince-of-persia-lost-crown-deluxe-breaker-1920x1080-44d2c0406308.jpg?h=480&quality=medium&resize=1&w=854"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <ul className="home__carousel_right">
        <li className="carousel__right_items">
          <img
            src="https://cdn2.unrealengine.com/fc24set-epic-portrait-product-image-1200x1600-1200x1600-dfe2373ee736.jpg?h=128&quality=medium&resize=1&w=96"
            alt=""
            className="carousel__right_img"
          />
          <p className="carousel__right_title" style={{ padding: 0 }}>
            EA SPORTS FC
          </p>
        </li>
        <li className="carousel__right_items">
          <img
            src="https://cdn2.unrealengine.com/egs-spider-man-miles-morales-carousel-thumb-1200x1600-b7c0fb2da84b.jpg?h=128&quality=medium&resize=1&w=96"
            alt=""
            className="carousel__right_img"
          />
          <p className="carousel__right_title">MARVEL: Spider-man</p>
        </li>
        <li className="carousel__right_items">
          <img
            src="https://cdn2.unrealengine.com/egs-ac-mirage-carousel-thumb-1200x1600-c884e5dc38af.jpg?h=128&quality=medium&resize=1&w=96"
            alt=""
            className="carousel__right_img"
          />
          <p className="carousel__right_title">Assassins's Creed: Мираж</p>
        </li>
        <li className="carousel__right_items">
          <img
            src="https://cdn2.unrealengine.com/egs-prince-of-persia-lost-crown-deluxe-breaker-1920x1080-44d2c0406308.jpg?h=480&quality=medium&resize=1&w=854"
            alt=""
            className="carousel__right_img"
          />
          <p className="carousel__right_title">Prince of Persia</p>
        </li>
        <li className="carousel__right_items">
          <img
            src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
            alt=""
            className="carousel__right_img"
          />
          <p className="carousel__right_title">GRAND THEFT AUTO V</p>
        </li>
        <li className="carousel__right_items">
          <img
            src="https://cdn2.unrealengine.com/01-25br-s25-egs-launcher-pdp-2560x1440-2560x1440-92db8752f5af.jpg"
            alt=""
            className="carousel__right_img"
            style={{ opacity: 0.7 }}
          />
          <p style={{ padding: 0 }} className="carousel__right_title">
            Fortnite
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HomeCarousel;
