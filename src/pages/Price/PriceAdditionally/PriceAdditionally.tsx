import Btn from '../../../components/Btn/Btn';
import MobileMenu from '../../../components/MobileMenu/ModileMenu';
import Photo from '../../../components/Photo/Photo';

import '../Price.scss';

export const mockData = {
    data: [
        { title: 'камуфляж бороды (полный)', price: '700 Р', id: 1 },
        { title: 'камуфляж головы', price: '1000 Р', id: 1 },
        { title: 'мытье и укладка', price: '400 Р', id: 1 },
        { title: 'окантовка с подбриванием', price: '300 Р', id: 1 },
        { title: 'депиляция воском', price: '400 / 1000 Р', id: 1 },
        { title: 'черная маска', price: '1000 Р', id: 1 },
    ],
};

const PriceAdditionally = () => {
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

export default PriceAdditionally;
