import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

const CarouselContainer = () => {
  return (
    //<div style={{ display: 'block', width: 700, padding: 30 }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{
            height: '80vh',
          }}
          className="d-block w-100"
          src="https://isabelprojects.s3.amazonaws.com/proyectouri/Logos/URI%20SHOT%20EDIT%20URI%20FONDONEGRO.jpg"
          alt="First slide"
        />
        <CarouselCaption>
          <h3 className="corh3">SHOT and EDIT by URI </h3>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: '80vh',
          }}
          className="d-block w-100"
          src="https://isabelprojects.s3.amazonaws.com/proyectouri/Logos/Uri-1.jpg"
          alt="Second slide"
        />
        <CarouselCaption>
          <h3 className="corh3">SHOT and EDIT by URI </h3>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: '80vh',
          }}
          className="d-block w-100"
          src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_uri.jpeg"
          alt="Third slide"
        />
        <CarouselCaption>
          <h3 className="corh3">SHOT and EDIT by URI </h3>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
    //</div>
  );
};
export default CarouselContainer;
