import { React } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Header.scss';

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
                        style={{ margin: '0 2.4rem 0 0' }}
                    >
                        <li className="header__item">О нас</li>
                    </Link>
                    <Link
                        to="Price"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={ScrollToElement}
                        style={{ margin: '0 2.4rem 0 0' }}
                    >
                        <li className="header__item">Услуги цены</li>
                    </Link>
                    <Link
                        to="Contacts"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={ScrollToElement}
                        style={{ margin: '0 2.4rem 0 0' }}
                    >
                        <li className="header__item">Контакты</li>
                    </Link>
                </ul>
            </nav>
            <div className="header__contacts">
                <div className="header__contacts-left">
                    <a href="https://wa.me/79995505949" className="header__contacts-whatsapp"></a>
                </div>
                <Link to="Contacts" smooth={true} duration={500} spy={true} onClick={ScrollToElement}>
                    <div className="header__contacts-right">
                        <div className="header__contacts-location"></div>
                        г. Люберцы, ул. <br /> Юности, 2
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
