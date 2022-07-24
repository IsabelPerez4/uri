import React from 'react';

import '../CSS/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  return (
    <>
      <div className="slider">
        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/cyed-1.jpeg"
            alt="cyed"
            className="img-fluid"
          />
          <figcaption>Cali y el Dandee</figcaption>
        </figure>

        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/sb2.jpg"
            alt="Sebastian_Yatra"
            className="img-fluid"
          />
          <figcaption>Sebastian Yatra</figcaption>
        </figure>

        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_2.jpg"
            alt="Lunay"
            className="img-fluid"
          />
          <figcaption>Lunay</figcaption>
        </figure>
        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/gigolo-y-la%20exce-3.jpg"
            alt="gigolo_y_la_exce"
            className="img-fluid"
          />
          <figcaption>Gigolo y la Exce</figcaption>
        </figure>
      </div>

      <div className="slider">
        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_1.jpg"
            alt="lunay"
            className="img-fluid"
          />
          <figcaption>Lunay</figcaption>
        </figure>

        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/omar-montes.jpg"
            alt="omar_montes"
            className="img-fluid"
          />
          <figcaption>Omar Montes</figcaption>
        </figure>

        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/sb1.jpg"
            alt="sebastian_yatra"
            className="img-fluid"
          />
          <figcaption>Sebastian Yatra</figcaption>
        </figure>

        <figure className="position-relative">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/camilo.jpg"
            alt="camilo"
            className="img-fluid"
          />
          <figcaption>Camilo</figcaption>
        </figure>
      </div>
    </>
  );
};

export default Slider;
