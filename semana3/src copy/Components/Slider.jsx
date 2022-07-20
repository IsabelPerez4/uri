import React from 'react';
import Images from '../exports/Images';

import '../CSS/slider.css';

const Slider = () => {
  return (
    <>
      <div className="slider container">
        <div className="slider">
          {Images.map((Image) => (
            <div className="item">
              <img src={Image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Slider;
