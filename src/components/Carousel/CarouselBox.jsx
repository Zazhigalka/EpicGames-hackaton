import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useInView } from "react-intersection-observer";

const CarouselBox = () => {
  const { oneProduct } = useProduct();

  return (
    <Carousel style={{ width: "90%" }}>
      <CarouselItem>
        <video
          className="d-block"
          style={{ width: "100%" }}
          autoPlay="true"
          controls
        >
          <source src={oneProduct?.video} type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
        {/* <img
          className="d-block"
          style={{ width: "100%" }}
          src="https://cdn2.unrealengine.com/06-gameplaystill007-3840x2160-3840x2160-0a9808f757e3.png"
        /> */}
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block"
          style={{ width: "100%" }}
          src={oneProduct?.image_one}
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block"
          style={{ width: "100%" }}
          src={oneProduct?.image_two}
        />
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselBox;
