import React from 'react';
import '../CSS/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SliderTwo = () => {
  return (
    <>
      <div className="slider">
        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_3.jpg"
            alt="lunay"
            className="img-fluid"
          />
          <figcaption>Lunay</figcaption>
        </figure>

        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_4.jpg"
            alt="lunay"
            className="img-fluid"
          />
          <figcaption>Lunay</figcaption>
        </figure>
        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/emilia_1.jpg"
            alt="emilia"
            className="img-fluid"
          />
          <figcaption>Emilia</figcaption>
        </figure>
        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/emilia_2.jpg"
            alt="emilia"
            className="img-fluid"
          />
          <figcaption>Emilia</figcaption>
        </figure>
      </div>
    </>
  );
};

export default SliderTwo;
