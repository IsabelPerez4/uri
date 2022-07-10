import React from 'react';
import Slider from '../Components/Slider';
import SliderOne from '../Components/SliderOne';

import { Link } from 'react-router-dom';

const Fotos = () => {
  return (
    <div>
      <h2>Fotos</h2>
      <Slider></Slider>
      <SliderOne></SliderOne>
      <div className="masFotos">
        <Link to="/MasFotos">Más Fotos</Link>
      </div>
    </div>
  );
};

export default Fotos;
