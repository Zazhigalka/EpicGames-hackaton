import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./CarouselBox.css";

const CarouselBox = () => {
  const { oneProduct } = useProduct();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div style={{ width: "90%" }}>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {oneProduct ? (
          <Carousel.Item>
            <video className="d-block w-100" autoPlay muted controls>
              <source src={oneProduct?.video} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </Carousel.Item>
        ) : null}

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oneProduct?.image_one}
            alt="Image 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oneProduct?.image_two}
            alt="Image 2"
          />
        </Carousel.Item>
        {oneProduct?.image_one ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_one}
              alt="Image 1"
            />
          </Carousel.Item>
        ) : null}

        {oneProduct?.image_two ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_two}
              alt="Image 2"
            />
          </Carousel.Item>
        ) : null}

        {oneProduct?.image_three ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_three}
              alt="Image 3"
            />
          </Carousel.Item>
        ) : null}

        {oneProduct?.image_four ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_four}
              alt="Image 4"
            />
          </Carousel.Item>
        ) : null}

        {oneProduct?.image_five ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_five}
              alt="Image 5"
            />
          </Carousel.Item>
        ) : null}
        {oneProduct?.image_six ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_six}
              alt="Image 6"
            />
          </Carousel.Item>
        ) : null}
        {oneProduct?.image_seven ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_seven}
              alt="Image 7"
            />
          </Carousel.Item>
        ) : null}
        {oneProduct?.image_eight ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_eight}
              alt="Image 8"
            />
          </Carousel.Item>
        ) : null}
        {oneProduct?.image_nine ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_nine}
              alt="Image 9"
            />
          </Carousel.Item>
        ) : null}
        {oneProduct?.image_ten ? (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={oneProduct?.image_ten}
              alt="Image 10"
            />
          </Carousel.Item>
        ) : null}
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        <video
          className={`thumbnail ${activeIndex === 0 ? "active" : ""}`}
          src={oneProduct?.video}
          alt="Video Thumbnail"
          onClick={() => setActiveIndex(0)}
        />
        {oneProduct?.image_one ? (
          <img
            className={`thumbnail ${activeIndex === 1 ? "active" : ""}`}
            src={oneProduct?.image_one}
            alt="Image 1 Thumbnail"
            onClick={() => setActiveIndex(1)}
          />
        ) : null}
        {oneProduct?.image_two ? (
          <img
            className={`thumbnail ${activeIndex === 2 ? "active" : ""}`}
            src={oneProduct?.image_two}
            alt="Image 2 Thumbnail"
            onClick={() => setActiveIndex(2)}
          />
        ) : null}
        {oneProduct?.image_three ? (
          <img
            className={`thumbnail ${activeIndex === 3 ? "active" : ""}`}
            src={oneProduct?.image_three}
            alt="Image 3 Thumbnail"
            onClick={() => setActiveIndex(3)}
          />
        ) : null}
        {oneProduct?.image_four ? (
          <img
            className={`thumbnail ${activeIndex === 4 ? "active" : ""}`}
            src={oneProduct?.image_four}
            alt="Image 1 Thumbnail"
            onClick={() => setActiveIndex(4)}
          />
        ) : null}
        {oneProduct?.image_five ? (
          <img
            className={`thumbnail ${activeIndex === 5 ? "active" : ""}`}
            src={oneProduct?.image_five}
            alt="Image 1 Thumbnail"
            onClick={() => setActiveIndex(5)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CarouselBox;
