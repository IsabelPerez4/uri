import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

const CarouselContainer = () => {
  return (
    //<div style={{ display: 'block', width: 1000, height: 800, padding: 0 }}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://isabelprojects.s3.amazonaws.com/proyectouri/Logos/URI%20SHOT%20EDIT%20URI%20FONDONEGRO.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="ci">
        <img
          className="d-block w-100"
          src="https://isabelprojects.s3.amazonaws.com/proyectouri/Logos/uri_7.jpg"
          alt="Second slide"
        />
        <CarouselCaption>
          <h1>SHOT and EDIT by URI </h1>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item className="ci">
        <img
          className="d-block w-100"
          src="https://isabelprojects.s3.amazonaws.com/proyectouri/Logos/Uri-1.jpg"
          alt="Third slide"
        />
        <CarouselCaption>
          <h1>SHOT and EDIT by URI </h1>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
    //</div>
  );
};

export default CarouselContainer;
