import React from 'react';
import Slider from '../Components/Slider';
import SliderOne from '../Components/SliderOne';

import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MasFotos from './MasFotos';

const Fotos = () => {
  return (
    <div>
      <h2>Fotos</h2>
      <Slider></Slider>
      <SliderOne></SliderOne>
      <div className="masFotos">
        <Link to="/MasFotos">Más Fotos</Link>
      </div>
      <Routes>
        <Route path="/MasFotos" element={<MasFotos />} />
      </Routes>
    </div>
  );
};

export default Fotos;
