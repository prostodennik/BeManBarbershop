import { Placement } from 'tippy.js';
import { TippyProps } from '@tippyjs/react';

import cn from 'classnames';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import './index.scss';

type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides;

type PopupProps = Overwrite<
    JSX.IntrinsicElements['div'],
    {
        children: React.ReactNode;
        element?: React.ReactNode;
        text?: string;
        subtext?: string;
        position?: Placement;
        width?: React.CSSProperties['width'];
        options?: TippyProps;
        contentClassName?: string;
    }
>;

const Popup = ({
    children,
    element,
    text,
    subtext,
    position,
    width,
    options,
    contentClassName,
    style = {},
    className,
    ...props
}: PopupProps) => {
    return (
        <Tippy
            placement={position}
            arrow={false}
            hideOnClick={false}
            content={
                <div className={cn('popup__element', position && `popup--${position}`)} style={{ ...style, width }}>
                    {element && element}
                    {text && <span>{text}</span>}
                    {subtext && <small>{subtext}</small>}
                </div>
            }
            className={cn('popup', className)}
            {...options}
        >
            <div className={cn('popup__content', contentClassName)} {...props}>
                {children}
            </div>
        </Tippy>
    );
};

export default Popup;
