import React, { useState } from 'react';
import Modal from 'react-modal';

import './Btn.scss';

const Btn = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    if (modalIsOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    const customStyles = {
        content: {
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            margin: '0 auto',
            padding: '0',
            border: 'none',
            background: 'none',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '0',
            outline: 'none',
            width: '100%',
            height: '100%',
        },
    };

    return (
        <>
            <button className="btn" onClick={() => setModalIsOpen(true)}>
                записаться
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <iframe
                    src="https://n1005319.yclients.com/"
                    style={{
                        width: '85%',
                        height: '100%',
                        border: 'none',
                        position: 'absolute',
                        inset: '0',
                        margin: '0 auto',
                    }}
                ></iframe>
                <button className="close" onClick={() => setModalIsOpen(false)}></button>
            </Modal>
        </>
    );
};

export default Btn;
