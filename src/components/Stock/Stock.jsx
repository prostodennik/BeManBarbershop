import React from 'react';
import ImgStock from '../../assets/images/stock.jpg';
import MobileMenu from '../MobileMenu/ModileMenu';
import InstallPWA from '../InstallPWA/InstallPWA';

import './Stock.scss';

const Stock = () => {
    return (
        <>
            <InstallPWA />
            <MobileMenu cn={'mobile-menu-stock'} />
            <div className="stock__img-wrap">
                <img className="stock__img" src={ImgStock} alt="ImgStock" />
            </div>
        </>
    );
};

export default Stock;
