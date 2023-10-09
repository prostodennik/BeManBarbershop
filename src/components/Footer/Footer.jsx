import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";
import { ReactComponent as Vk } from "../../assets/icons/vk.svg";
import In from "../../assets/images/inst.png";
import Cat from "../../assets/images/cat.jpg";

import "./Footer.scss";

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount + 1 === 7) {
      setShowPhoto(true);
    }
  };

  return (
    <div className="footer" style={{ position: "relative" }}>
      {showPhoto && (
        <div style={{ color: "#000" }}>
          <img
            src={Cat}
            className="footer__img"
            alt="Cat"
            style={{
              position: "absolute",
              width: "100%",
              bottom: "0",
              left: "0",
            }}
          />
          <div
            className="footer__img"
            style={{
              position: "absolute",
              bottom: "0",
              color: "#000",
              fontSize: "1.6rem",
              fontWeight: "700",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            by DENDI
          </div>
        </div>
      )}
      <div className="footer__left">
        <Logo
          style={{ margin: "0 0 2.4rem", maxWidth: "100%" }}
          onClick={handleClick}
        />
        ИП ИВАНОВ ИВАН ИВАНОВИЧ <br /> ОГРН: ХХХХХХХХХХХХ ИНН: ХХХХХХХХХХХ
      </div>
      <div className="footer__right">
        <div className="footer__right-left">
          Подписывайся на нас <br /> в социальных сетях!
        </div>
        <div className="footer__right-right">
          <Vk style={{ margin: "0 2.4rem 0 0" }} />
          <img src={In} className="footer__img" alt="In" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
