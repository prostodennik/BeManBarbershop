import React from 'react';
import Top from '../Top/Top';
import About from '../About/About';
import Price from '../Price/Price';
import Photo from '../Photo/Photo';
import Contacts from '../Contacts/Contacts';
import InstallPWA from '../InstallPWA/InstallPWA';
import Interior from '../Interior/Interior';

const MainPage = () => {
    return (
        <>
            <InstallPWA />
            <Top />
            <About />
            <Interior />
            <Price />
            <Photo />
            <Contacts />
        </>
    );
};

export default MainPage;
