import React from 'react';

import Map from '../../assets/images/map.png';
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Tel } from "../../assets/icons/tel.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";

import './Contacts.scss'

const Contacts = () => {
  return (
    <div className='contacts'>
      <h2 className="contacts__title">контакты</h2>
      <ul className="contacts__list">
        <li className="contacts__item">
          <img src={Map} alt="Map" className="contacts__map" />
          </li> 
        <li className="contacts__item">
          <div className="contacts__adress" style={{margin: '0 0 2.4rem'}}>
            <Location style={{margin: '0 1rem 0 0'}}/>
            Г. Люберцы, ул. Юности, д.2
          </div>
          <div className="contacts__tel" style={{margin: '0 0 2.4rem'}}>
            <Tel style={{margin: '0 1rem 0 0'}}/>
            +7 (ххх) ххх-хх-хх
          </div>
          <div className="contacts__mail" style={{margin: '0 0 2.4rem'}}>
            <Mail style={{margin: '0 1rem 0 0'}}/>
            BEMANBARBERSHOP@MAIL.RU
          </div>
          </li> 
      </ul>
    </div>
  );
};

export default Contacts;