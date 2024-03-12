import Btn from '../../../components/Btn/Btn';
import MobileMenu from '../../../components/MobileMenu/ModileMenu';
import Photo from '../../../components/Photo/Photo';

import '../Price.scss';

export const mockData = {
    data: [
        { title: 'Стрижка мужская', price: '1400 Р', id: 0 },
        { title: 'Стрижка детская (от 3 до 10 лет)', price: '1000 Р', id: 0 },
        { title: 'Стрижка машинкой (одна насадка)', price: '600 Р', id: 0 },
        { title: 'Стрижка машинкой (несколько насадок)', price: '800 Р', id: 0 },
        { title: 'коррекция бороды', price: '1000 Р', id: 0 },
        { title: 'опасное бритье (лицо или голова)', price: '1000 Р', id: 0 },
        { title: 'Химическая завивка для мужчин', price: 'ОТ 4000 Р', id: 0 },
        { title: 'Окрашивание для мужчин', price: 'ОТ 2500 Р', id: 0 },
    ],
};

const PriceBasic = () => {
    return (
        <>
            <MobileMenu cn="mobile-menu-mob" />

            <div className="price" id="Price">
                <h2 className="price__title">Услуги и цены</h2>
                <h3 className="price__subtitle">Добро пожаловать в Be man barbershop!</h3>
                <ul className="price__services">
                    {mockData.data.map((item, index) => {
                        return (
                            <li className="price__services-item" key={index}>
                                <div className="price__services-services">{item.title}</div>
                                <div className="price__services-price">{item.price}</div>
                            </li>
                        );
                    })}
                </ul>
                <Btn style={{ margin: '0 0 2.4rem 0 ' }} />
            </div>
            <Photo style={{ margin: '0 0 2.4rem 0 ' }} />
        </>
    );
};

export default PriceBasic;
