import Btn from '../../components/Btn/Btn';

import Morgans from '../../assets/images/morgans.png';
import { BrandBenefit } from '../../components/BrandBenefit/BrandBenefit';
import MobileMenu from '../../components/MobileMenu/ModileMenu';

import './Сosmetics.scss';

const brandBenefits = [
    'Английское качество',
    'Сертифицировано и абсолютно безопасно',
    'Широкий выбор средств и ароматов',
    'Доступная стоимость',
];

const Сosmetics = () => {
    return (
        <>
            <MobileMenu cn="mobile-menu-mob" />

            <div className="cosmetics">
                <div className="cosmetics__title-block">
                    <div className="cosmetics__title page-title">Косметика</div>
                    <div className="cosmetics__subtitle page-subtitle">работаем только с лучшими брендами</div>
                </div>
                <div className="cosmetics__morgans">
                    <img src={Morgans} alt={`Morgan's`} />
                </div>

                <div className="cosmetics__brand-description">
                    <p>
                        Основанная в 1873 году компания Morgan's сейчас известна во всем мире и является воплощением
                        старомодных ценностей. Мы гордимся тем, что используем эту косметику в работе и рекомендуем её
                        каждому нашему гостю.
                    </p>
                </div>

                <div className="cosmetics__brand-benefits">
                    <div className="cosmetics__brand-benefits-title">
                        Почему в своей работе мы выбрали именно этот бренд:
                    </div>
                    <div className="cosmetics__benefits">
                        {brandBenefits.map((benefitDescription: string, index: number) => {
                            return (
                                <BrandBenefit
                                    description={benefitDescription}
                                    className="cosmetics__benefits-item"
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="sign-up">
                <Btn style={{ width: '22.8rem' }} />
            </div>
        </>
    );
};

export default Сosmetics;
