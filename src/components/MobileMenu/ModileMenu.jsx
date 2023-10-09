import React, { useState } from "react";
import "./MobileMenu.scss";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp-mob.svg";
import { ReactComponent as Vk } from "../../assets/icons/vk-mob.svg";
import In from "../../assets/images/in-mob.png";
import { ReactComponent as WhatsappWhite} from "../../assets/icons/whatsapp-white.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo-white.svg";
import { ReactComponent as BurgerMenu } from "../../assets/icons/burger.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from "../Btn/Btn";

const ModileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  };

  const ScrollToElement = () => {
    scroll.scrollTo(0, {
      duration: 500,
      smooth: true,
    });

    //через 1 секунду закрывает меню
    setTimeout(() => {
      closeMenu();
    });
  };

  return (
    <div className="mobile-menu">
      {window.innerWidth <= 768 && (<div className="mobile-menu__head">
        <WhatsappWhite />
        <Logo style={{width: '20rem'}}/>
        <BurgerMenu onClick={openMenu} style={{cursor: 'pointer'}}/>
      </div>)}
      {isOpen && (
        <div className={`mobile-menu__wrap ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu__head-open">
            <Logo style={{width: '20rem'}}/>
            <Close style={{cursor: 'pointer'}} onClick={closeMenu}/>
          </div>
          <div className="mobile-menu__menu">
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__list">
                <Link
                  to="About"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={ScrollToElement}
                  style={{ margin: "0 2.4rem 0 0" }}
                >
                  <li className="mobile-menu__item">О нас</li>
                </Link>
                <Link
                  to="Price"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={ScrollToElement}
                  style={{ margin: "0 2.4rem 0 0" }}
                >
                  <li className="mobile-menu__item">Услуги цены</li>
                </Link>
                <Link
                  to="Contacts"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={ScrollToElement}
                  style={{ margin: "0 2.4rem 0 0" }}
                >
                  <li className="mobile-menu__item">Контакты</li>
                </Link>
              </ul>
            </nav>
            <div className="mobile-menu__contacts">
              <div className="mobile-menu__contacts-left">
                <a href="/">
                  <Whatsapp style={{ margin: "0 2.4rem 0 0" }} />
                </a>
                <a href="/">
                  <Vk style={{ margin: "0 2.4rem 0 0" }} />
                </a>
                <a href="/">
                  <img src={In} alt="" style={{ width: "fit-content" }} />
                </a>
              </div>
              <div className="mobile-menu__contacts-right">
                <div className="mobile-menu__contacts-location">
                  <Location />
                </div>
                г. Люберцы, ул. <br /> Юности, 2
              </div>
            </div>
            <Button />
          </div>
        </div>
      )
      }
    </div>
  );
};

export default ModileMenu;
