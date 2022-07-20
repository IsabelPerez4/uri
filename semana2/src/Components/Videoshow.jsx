import React from 'react';
import ReactPlayer from 'react-player';
import '../CSS/video.css';

const VideoShow = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <ReactPlayer
            url={
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/lunay_4.mp4'
            }
            width="100%"
            height="100%"
            controls
            loop
            volume="0.4"
            className="video_player"
          />
        </div>
        <div className="column">
          <ReactPlayer
            url={
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/yatra_tour_veranotour_2021.mp4'
            }
            width="360px"
            height="240px"
            max-height="100%"
            max-widht="100%"
            controls
            loop
            volume="0.4"
            className="video_player"
          />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <ReactPlayer
            url={
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/lunay_2.mp4'
            }
            width="360px"
            height="240px"
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
              'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/yatra_tour_veranotour_2021.mp4'
            }
            width="100%"
            height="100%"
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

export default VideoShow;
