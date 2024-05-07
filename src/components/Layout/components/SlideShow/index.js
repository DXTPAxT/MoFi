import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';

import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function SlideShow(props) {
    const [currentItem, setCurrentItem] = useState(1);

    const slideListRef = useRef();

    useEffect(() => {
        const slideItemWidth = props.children[0].ref.current.offsetWidth;
        slideListRef.current.style.transform = `translateX(${currentItem * -slideItemWidth}px)`;
    }, [currentItem]);

    return (
        <div className={cx('wrapper')} style={props.ns}>
            <div className={cx('slide-list')} ref={slideListRef}>
                {props.children}
            </div>
            <div className={cx('slide-icon', 'left') + (currentItem == 0 ? ' hide' : '')}>
                <Icon icon="simple-line-icons:arrow-left" />
            </div>
            <div className={cx('slide-icon', 'right') + (currentItem == props.max - 1 ? ' hide' : '')}>
                <Icon icon="simple-line-icons:arrow-right" />
            </div>
        </div>
    );
}

export default SlideShow;
