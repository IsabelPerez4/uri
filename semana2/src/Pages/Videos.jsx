import React from 'react';

import { Link } from 'react-router-dom';
import VideoShow from '../Components/Videoshow';
import { Routes, Route } from 'react-router-dom';
import MasVideos from './MasVideos';

const Videos = () => {
  return (
    <div>
      <h2>Videos</h2>
      <VideoShow></VideoShow>

      <div className="masVideos">
        <Link to="/MasVideos">Más Videos</Link>
      </div>
      <Routes>
        <Route path="/MasVideos" element={<MasVideos />} />
      </Routes>
    </div>
  );
};

export default Videos;
