import React from 'react';
import Top from '../Top/Top';
import About from '../About/About';
import Price from '../Price/Price';
import Photo from '../Photo/Photo';
import Contacts from '../Contacts/Contacts';
import InstallPWA from '../InstallPWA/InstallPWA';

const MainPage = () => {
    return (
        <>
            <InstallPWA />
            <Top />
            <About />
            <Price />
            <Photo />
            <Contacts />
        </>
    );
};

export default MainPage;
