import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">О нас</li>
          <li className="header__item">Услуги цены</li>
          <li className="header__item">Контакты</li>
        </ul>
      </nav>
      <div className="header__contacts">
        <div className="header__contacts-left">
          <Whatsapp />
        </div>
        <div className="header__contacts-right">
          <div className="header__contacts-location">
            <Location />
          </div>
          г. Люберцы, ул. <br /> Юности, 2
        </div>
      </div>
    </div>
  );
};

export default Header;
