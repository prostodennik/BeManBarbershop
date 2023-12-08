import React from 'react';
import './Top.scss';
import TopImgRight from '../../assets/images/top-right.png';
import Btn from '../Btn/Btn';

import MobileMenu from '../MobileMenu/ModileMenu';

const Top = () => {
    return (
        <>
            <div className="top">
                <div className="top__left">
                    <h1 className="top__title">BE MAN</h1>
                    <div className="top__subtitle">
                        Место, где каждый <br /> будет чувствовать <br /> себя джентльменом
                    </div>
                    <Btn />
                </div>
                <div className="top__right">
                    <img src={TopImgRight} alt="BE MAN" className="top__img" />
                </div>
            </div>
            <div className="top top_mobile">
                <MobileMenu />
                <h1 className="top__title top__title_mobile">BE MAN</h1>
                <div className="top__subtitle top__subtitle_mobile">
                    место, где каждый <br /> будет чувствовать <br /> себя джентльменом
                </div>
                <Btn />
            </div>
        </>
    );
};

export default Top;
