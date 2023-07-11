import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const CarouselBox = () => {
  return (
    <Carousel style={{ width: '90%' }}>
      <CarouselItem>
        <img
          className="d-block"
          style={{ width: '100%' }}
          src="https://cdn2.unrealengine.com/06-gameplaystill007-3840x2160-3840x2160-0a9808f757e3.png"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block"
          style={{ width: '100%' }}
          src="https://cdn2.unrealengine.com/05-cinematicstill003-3840x2160-3840x2160-97121fdfb6d2.png"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block"
          style={{ width: '100%' }}
          src="https://cdn2.unrealengine.com/06-gameplaystill007-3840x2160-3840x2160-0a9808f757e3.png"
        />
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselBox;
