import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import Contacts from './Pages/Contacts';
import Uri from './Pages/Uri';
import Fotos from './Pages/Fotos';
import Videos from './Pages/Videos';
import './Pages/CarouselContainer';

import './App.css';
import CarouselContainer from './Pages/CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CarouselContainer />
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/uri" element={<Uri />} />
        <Route path="/fotos" element={<Fotos />} />

        <Route path="/videos" element={<Videos />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
