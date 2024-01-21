import React, { useEffect, useState } from 'react';
import './InstallPWA.scss';

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });
    }, []);

    useEffect(() => {
        if (deferredPrompt !== null) {
            const timer = setTimeout(() => {
                setShowPrompt(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [deferredPrompt]);

    const handleClick = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
            setDeferredPrompt(null);
        });
    };

    return (
        <div className={`install-pwa ${showPrompt ? 'show' : ''}`}>
            <button className="install-pwa__btn" onClick={handleClick}>
                Установите приложение
            </button>
            <button onClick={() => setShowPrompt(false)} className="install-pwa__close-btn"></button>
        </div>
    );
};

export default InstallPWA;
