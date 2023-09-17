import React from 'react';
import "./Top.scss"
import TopImgRight from "../../assets/images/top-right.png"

import Btn from "../Btn/Btn"


const Top = () => {
  return (
    <div className='top'>
      <div className="top__left">
        <h1 className="top__title">BE MAN</h1>
        <div className="top__subtitle">место, где каждый <br /> будет чувствовать <br /> себя джентльменом</div>
        <Btn />
      </div>
      <div className="top__right">
        <img src={TopImgRight} alt="" className="top__img" />
      </div>
    </div>
  );
};

export default Top;