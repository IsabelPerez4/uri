import React from 'react';

import Images2 from '../exports/Images2';
import '../CSS/slider.css';
import { motion } from 'framer-motion';

const SliderOne = () => {
  return (
    <motion.div className="slider container">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -212 }}
      >
        {Images2.map((Image2) => (
          <motion.div className="item">
            <img src={Image2} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default SliderOne;
