import * as React from 'react';
import { IBlogCardProps } from './type';

import './BlogCard.scss';

export const BlogCard: React.FC<IBlogCardProps> = (props: IBlogCardProps): React.ReactElement => {
    return (
        <div className="blog-cards">
            <div className="blog-cards__photo-container">
                <img src={props.photoSrc} alt={props.alt} />
            </div>
            <div className="blog-cards__info">
                <div className="blog-cards__name">{props.name}</div>
                <div className="blog-cards__position">{props.position}</div>
                {props.paragraphs.map((paragraph: string, index: number) => {
                    return (
                        <div className="blog-cards__detailed-info" key={index}>
                            {paragraph}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
