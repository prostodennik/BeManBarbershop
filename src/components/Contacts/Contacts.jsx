import React from 'react';

// import Map from "../../assets/images/map.png";

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './Contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts" id="Contacts">
            <h2 className="contacts__title">контакты</h2>
            <ul className="contacts__list">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [55.702784, 37.911932],
                            zoom: 16,
                            controls: [],
                        }}
                        style={{ width: '100%', height: '400px' }}
                    >
                        <Placemark
                            geometry={[55.702784, 37.911932]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref:
                                    'https://bemanbarbershop.ru/static/media/logo.6e385308c12499ba7f4df9c73ced9d30.svg',
                                iconImageSize: [70, 70],
                            }}
                        />
                    </Map>
                </YMaps>

                <li className="contacts__item">
                    <a
                        href="/"
                        className="contacts__adress"
                        style={{
                            margin: '0 0 2.4rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div className="contacts__location"></div>
                        Г. Люберцы, ул. Юности, д.2
                    </a>
                    <a
                        href="tel: +7(999)5505949"
                        className="contacts__tel"
                        style={{
                            margin: '0 0 2.4rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div className="contacts__tel-icon"></div>
                        +7 (999) 550-59-49
                    </a>
                    <a
                        href="mailto: beman@bemanbarbershop.ru"
                        className="contacts__mail"
                        style={{
                            margin: '0 0 2.4rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div className="contacts__mail-icon"></div>
                        beman@bemanbarbershop.ru
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;
