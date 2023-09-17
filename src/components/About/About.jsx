import React from "react";
import ImgOne from "../../assets/images/about-one.png";
import ImgTwo from "../../assets/images/about-two.png";
import ImgThree from "../../assets/images/about-three.png";

import Btn from "../Btn/Btn";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h3 className="about__title">о нас</h3>
      <div className="about__subtitle">
        Мы команда профессионалов с многолетним опытом, которые создали новое
        место для мужчин всех возрастов, где все смогут ощутить качество и
        сервис наших услуг, благодаря индивидуальному подходу к каждому нашему
        гостю. Мы не огромная сеть, благодаря чему, всё наше внимание
        сосредоточено на нашем барбершопе, что позволяет нам постоянно
        совершенствоваться и оказывать лучший сервис среди многочисленных
        салонов для мужчин.
      </div>
      <ul className="about__list">
        <li className="about__item">
          <img src={ImgOne} alt="" className="about__img" />
          <div className="about__desc">
            Индивидуальный подход от команды профессионалов с многолетним опытом
          </div>
        </li>
        <li className="about__item">
          <img src={ImgTwo} alt="" className="about__img" />
          <div className="about__desc">
            Мы используем профессиональную, косметику премиум класса и лучшие
            инструменты
          </div>
        </li>
        <li className="about__item">
          <img src={ImgThree} alt="" className="about__img" />
          <div className="about__desc">
            Мы обязательно угостим Вас чашечкой ароматного кофе или чая
          </div>
        </li>
      </ul>
      <div className="about__btn-wrap">
        <Btn />
      </div>
    </div>
  );
};

export default About;
