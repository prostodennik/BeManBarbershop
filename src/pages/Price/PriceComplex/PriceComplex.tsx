import Btn from '../../../components/Btn/Btn';
import MobileMenu from '../../../components/MobileMenu/ModileMenu';

import '../Price.scss';

export const mockData = {
    data: [
        { title: 'друг + друг', price: '2400 Р', id: 2 },
        {
            title: 'папа + сын (стрижка мужская и детская от 3 до 10 лет)',
            price: '2000 Р',
            id: 2,
        },
        { title: 'сын + сын (от 3 до 10 лет)', price: '1800 Р', id: 2 },
        { title: 'Стрижка + коррекция бороды', price: '2000 Р', id: 2 },
    ],
};

const PriceComplex = () => {
    return (
        <>
            <MobileMenu cn={'mobile-menu-stock'} />
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
                <Btn />
            </div>
        </>
    );
};

export default PriceComplex;
