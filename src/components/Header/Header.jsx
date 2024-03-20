import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Popup from '../../ui-kit/Popup/Popup';

import './Header.scss';

const Header = () => {
    const { pathname } = useLocation();

    const ScrollToElement = () => {
        scroll.scrollTo(0, {
            duration: 500,
            smooth: true,
        });
    };

    return (
        <div className="header">
            <div className="header__logo">
                <a href="/">
                    <Logo className="header__logo-icon" />
                </a>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    {pathname === '/' && (
                        <>
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
                        </>
                    )}
                    <li className="header__item">
                        <Popup
                            position="bottom"
                            options={{ interactive: true }}
                            // text="Это обертка"
                            // subtext="Которую можно сделать вокруг любого элемента"
                            element={
                                <>
                                    <a href="/price-basic">Основное</a>
                                    <a href="/price-additionally">дополнительно</a>
                                    <a href="/price-complex">комплекс</a>
                                </>
                            }
                        >
                            <div>
                                <h4 className="header__item">Услуги цены</h4>
                            </div>
                        </Popup>
                    </li>
                    <li className="header__item">
                        <a href="/masters">Мастера</a>
                    </li>
                    <li className="header__item">
                        <a href="/cosmetics">Косметика</a>
                    </li>
                    <li className="header__item">
                        <a href="/contacts">Контакты</a>
                    </li>
                    <li className="header__item">
                        <a href="/stock">Акции</a>
                    </li>
                    <li className="header__item">
                        <a href="/blog">Блог</a>
                    </li>
                </ul>
            </nav>
            <div className="header__contacts">
                <div className="header__contacts-left">
                    {/*eslint-disable-next-line*/}
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
