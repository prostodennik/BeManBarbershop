import { IBlogCardProps } from '../../components/BlogCard/type';
import MobileMenu from '../../components/MobileMenu/ModileMenu';
import BlogPhoto from '../../assets/images/blog.png';
import { BlogCard } from '../../components/BlogCard/BlogCard';

import './Blog.scss';
import Btn from '../../components/Btn/Btn';

const mockDatablog: IBlogCardProps[] = [
    {
        name: 'Заголовок',
        position: 'Подзаголовок',
        alt: 'Photo blog',
        paragraphs: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque eum eveniet ea expedita aliquam laboriosam itaque sunt. Nesciunt sequi nam nihil deserunt! Dicta fugiat ad eligendi magni laborum odit!',
        ],
        photoSrc: BlogPhoto as string,
    },
];

const Blog = () => {
    return (
        <>
            <MobileMenu cn="mobile-menu-mob" />

            <div className="blog container">
                <div className="blog__title-block">
                    <h2 className="blog__title page-title">Блог</h2>
                    <h3 className="blog__subtitle page-subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad delectus, nesciunt voluptatem quas
                        aut architecto sint impedit, provident eligendi qui reiciendis quod. Pariatur eos distinctio
                        debitis nisi nihil voluptates placeat.
                    </h3>
                </div>

                <div className="blog__list">
                    {mockDatablog.map((masterProps: IBlogCardProps, index: number) => {
                        return <BlogCard {...masterProps} key={index} />;
                    })}
                </div>
            </div>
            <div className="sign-up">
                <Btn style={{ width: '22.8rem' }} />
            </div>
        </>
    );
};

export default Blog;
