import * as React from 'react';
import { IMastersCardProps } from './type';

import './MastersCard.scss';

export const MastersCard: React.FC<IMastersCardProps> = (props: IMastersCardProps): React.ReactElement => {
    return (
        <div className='masters-card'>
            <div className='masters-card__photo-container'>
                <img
                    src={props.photoSrc}
                    alt={props.alt}
                />
            </div>
            <div className='masters-card__info'>
                <div className='masters-card__name'>
                    {props.name}
                </div>
                <div className='masters-card__position'>
                    {props.position}
                </div>
                {props.paragraphs.map((paragraph: string, index: number) => {
                    return (
                        <div className='masters-card__detailed-info' key={index}>
                            {paragraph}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
