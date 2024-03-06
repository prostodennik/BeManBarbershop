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
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
