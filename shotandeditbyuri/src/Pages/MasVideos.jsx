import React from 'react';
import ReactPlayer from 'react-player';
import '../CSS/video.css';

const MasVideos = () => {
  return (
    <>
      <h3>Más Videos</h3>

      <div className="row">
        <div className="column">
          <ReactPlayer
            url={
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/epapale_lunay%26lf.mp4'
            }
            width="380px"
            height="260px"
            max-height="100%"
            max-widht="100%"
            controls
            loop
            volume="0.4"
            className="video_player"
          />
        </div>
        <div className="column">
          <ReactPlayer
            url={
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/emilia.mp4'
            }
            width="380px"
            height="260px"
            max-height="100%"
            max-widht="100%"
            controls
            loop
            volume="0.4"
            className="video_player"
          />
        </div>
        <div className="column">
          <ReactPlayer
            url={
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/LUNAYEUROTOUR4.mp4'
            }
            width="380px"
            height="260px"
            max-height="100%"
            max-widht="100%"
            controls
            loop
            volume="0.4"
            className="video_player"
          />
        </div>
      </div>
    </>
  );
};

export default MasVideos;
