import React from 'react';

import { Link } from 'react-router-dom';
import VideoShow from '../Components/Videoshow';

const Videos = () => {
  return (
    <div>
      <h2>Videos</h2>
      <VideoShow></VideoShow>

      <div className="masVideos">
        <Link to="/MasVideos">Más Videos</Link>
      </div>
    </div>
  );
};

export default Videos;
