import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";
import { ReactComponent as Vk } from "../../assets/icons/vk.svg";
import In from "../../assets/icons/inst.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <Logo style={{margin: '0 0 2.4rem'}}/>
        ИП ИВАНОВ ИВАН ИВАНОВИЧ <br /> ОГРН: ХХХХХХХХХХХХ ИНН: ХХХХХХХХХХХ
      </div>
      <div className="footer__right">
        <div className="footer__right-left">Подписывайся на нас <br /> в социальных сетях!</div>
        <div className="footer__right-right">
          <Vk style={{margin: '0 2.4rem 0 0'}}/>
          <img src={In} className="footer__img" alt="In" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
