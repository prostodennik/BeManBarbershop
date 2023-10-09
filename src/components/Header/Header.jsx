import { React } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Header.scss";

const Header = () => {
  const ScrollToElement = () => {
    scroll.scrollTo(0, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <Link
            to="About"
            smooth={true}
            duration={500}
            spy={true}
            onClick={ScrollToElement}
            style={{ margin: "0 2.4rem 0 0" }}
          >
            <li className="header__item">О нас</li>
          </Link>
          <Link
            to="Price"
            smooth={true}
            duration={500}
            spy={true}
            onClick={ScrollToElement}
            style={{ margin: "0 2.4rem 0 0" }}
          >
            <li className="header__item">Услуги цены</li>
          </Link>
          <Link
            to="Contacts"
            smooth={true}
            duration={500}
            spy={true}
            onClick={ScrollToElement}
            style={{ margin: "0 2.4rem 0 0" }}
          >
            <li className="header__item">Контакты</li>
          </Link>
        </ul>
      </nav>
      <div className="header__contacts">
        <div className="header__contacts-left">
          <a href="/">
            <Whatsapp />
          </a>
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
