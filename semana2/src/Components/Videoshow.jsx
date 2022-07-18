import React from 'react';

import ReactPlayer from 'react-player';

const VideoShow = () => {
  return (
    <div className="videoshow">
      <div className="video_gallery">
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
        <ReactPlayer
          url={
            'https://isabelprojects.s3.amazonaws.com/proyectouri/Videos/gigolo_y_la_exce.mp4'
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
  );
};

export default VideoShow;
