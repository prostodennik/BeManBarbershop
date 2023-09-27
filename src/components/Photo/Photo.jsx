import React from 'react';

import './Photo.scss';

import ImgLeft from '../../assets/images/img-left.png';
import ImgRight from '../../assets/images/img-right.png';

const Photo = () => {
  return (
    <div className='photo'>
      <img src={ImgLeft} alt="Left" className="photo__img-left" />
      <img src={ImgRight} alt="Right" className="photo__img-right" />
    </div>
  );
};

export default Photo;