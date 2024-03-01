import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/icons/logo-white.svg';
import Cat from '../../assets/images/cat.jpg';

import './Footer.scss';

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
        <div className="footer" style={{ position: 'relative' }}>
            {showPhoto && (
                <div style={{ color: '#000' }}>
                    <img
                        src={Cat}
                        className="footer__img"
                        alt="Cat"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            bottom: '0',
                            left: '0',
                            zIndex: '99',
                        }}
                    />
                    <div
                        className="footer__img"
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            color: '#000',
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: '100',
                        }}
                    >
                        by DENDI
                    </div>
                </div>
            )}
            <div className="footer__left">
                <Logo style={{ margin: '0 0 2.4rem', maxWidth: '100%' }} onClick={handleClick} />
                ИП Бабаева Насиба Алиевна <br /> ОГРН: 321508100297833 ИНН: 500404764301
            </div>
            <div className="footer__right">
                <div className="footer__right-left">
                    Подписывайся на нас <br /> в социальных сетях!
                </div>
                <div className="footer__right-right">
                    {/*eslint-disable-next-line*/}
                    <a
                        href="https://vk.com/bemanbarbershop"
                        className="footer__right-vk"
                        aria-label="Ссылка на нашу страницу ВК"
                    ></a>
                    {/*eslint-disable-next-line*/}
                    <a
                        href="https://www.instagram.com/beman_barbershop?igsh=MThvMjdsYnBieWtzaQ=="
                        className="footer__right-in"
                        aria-label="Ссылка на нашу страницу в Instagram"
                    ></a>
                    {/* <a href="https://webmaster.yandex.ru/siteinfo/?site=https://bemanbarbershop.ru">
                        <img
                            width="88"
                            height="31"
                            alt=""
                            border="0"
                            src="https://yandex.ru/cycounter?https://bemanbarbershop.ru&theme=dark&lang=ru"
                        />
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
