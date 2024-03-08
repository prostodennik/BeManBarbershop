import './Photo.scss';

import ImgLeft from '../../assets/images/img-left.png';
import ImgRight from '../../assets/images/img-right.png';

type PhotoProps = {
    style?: {};
};

const Photo = ({ style }: PhotoProps) => {
    return (
        <div className="photo" style={style}>
            <img src={ImgLeft} alt="Left" className="photo__img-left" />
            <img src={ImgRight} alt="Right" className="photo__img-right" />
        </div>
    );
};

export default Photo;
