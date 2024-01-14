import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Top from './components/Top/Top';
import About from './components/About/About';
import Price from './components/Price/Price';
import Photo from './components/Photo/Photo';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

function App() {
    const Ololo = (props) => {
        console.log(props);
    };
    return (
        <div className="App">
            <Header props={Ololo} />
            <Top />
            <About />
            <Price />
            <Photo />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
