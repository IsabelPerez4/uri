import React from 'react';
import Slider from '../Components/Slider';
import { Routes, Route, Link } from 'react-router-dom';
import MasFotos from '../Pages/MasFotos';

const Fotos = () => {
  return (
    <div>
      <h2>Fotos</h2>
      <Slider />

      <div className="masFotos">
        <Link to="/MasFotos">Más Fotos</Link>
      </div>
    </div>
  );
};

export default Fotos;
