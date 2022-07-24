import React from 'react';

import Images2 from '../exports/Images2';
import '../CSS/slider.css';

const SliderOne = () => {
  return (
    <>
      <div className="slider container">
        <div className="slider">
          {Images2.map((Image2) => (
            <div className="item">
              <img src={Image2} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SliderOne;
