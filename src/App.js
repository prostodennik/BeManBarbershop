import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Stock from './components/Stock/Stock';
import PriceBasic from './pages/Price/PriceBasic/PriceBasic';
import PriceAdditionally from './pages/Price/PriceAdditionally/PriceAdditionally';
import PriceComplex from './pages/Price/PriceComplex/PriceComplex';
import Contacts from './pages/Contacts/Contacts';
import Сosmetics from './pages/Сosmetics/Сosmetics';
import Masters from './pages/Masters/Masters';
import Privacy from './pages/Privacy/Privacy';
import Blog from './pages/Blog/Blog';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/stock" element={<Stock />} />
                    <Route path="/price-basic" element={<PriceBasic />} />
                    <Route path="/price-additionally" element={<PriceAdditionally />} />
                    <Route path="/price-complex" element={<PriceComplex />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/cosmetics" element={<Сosmetics />} />
                    <Route path="/masters" element={<Masters />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
