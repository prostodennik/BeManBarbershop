import React, { useState } from 'react';
import './MobileMenu.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo-white.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import Button from '../Btn/Btn';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'visible';
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
            {window.innerWidth <= 768 && (
                <div className="mobile-menu__head">
                    <a href="https://wa.me/79995505949" className="mobile-menu__whatsapp"></a>
                    <Logo style={{ width: '20rem' }} />
                    <div onClick={openMenu} className="mobile-menu__open" />
                </div>
            )}
            {isOpen && (
                <div className={`mobile-menu__wrap ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-menu__head-open">
                        <Logo style={{ width: '20rem' }} />
                        <div className="mobile-menu__close" onClick={closeMenu} />
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
                                    style={{ margin: '0 0 2.4rem', display: 'block' }}
                                >
                                    <li className="mobile-menu__item">О нас</li>
                                </Link>
                                <Link
                                    to="Price"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    onClick={ScrollToElement}
                                    style={{ margin: '0 0 2.4rem', display: 'block' }}
                                >
                                    <li className="mobile-menu__item">Услуги цены</li>
                                </Link>
                                <Link
                                    to="Contacts"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    onClick={ScrollToElement}
                                    style={{ margin: '0 0 2.4rem', display: 'block' }}
                                >
                                    <li className="mobile-menu__item">Контакты</li>
                                </Link>
                            </ul>
                        </nav>
                        <div className="mobile-menu__contacts">
                            <div className="mobile-menu__contacts-left">
                                <a href="https://wa.me/79995505949" className="mobile-menu__whatsapp-primary"></a>
                                <a href="/" className="mobile-menu__vk"></a>
                                <a href="/" className="mobile-menu__in"></a>
                            </div>
                            <Link to="Contacts" smooth={true} duration={500} spy={true} onClick={ScrollToElement}>
                                <div className="mobile-menu__location">
                                    <div
                                        className="mobile-menu__location-icon"
                                        style={{
                                            margin: '0 2.4rem 0 0',
                                        }}
                                    ></div>
                                    г. Люберцы, ул. <br /> Юности, 2
                                </div>
                            </Link>
                        </div>
                        <Button />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
