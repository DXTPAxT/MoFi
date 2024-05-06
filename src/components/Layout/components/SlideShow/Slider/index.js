import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import { Icon } from '@iconify/react';

const cx = classNames.bind(styles);

function Slider({ children }) {
    let width = children['props'].children[0].offsetWidth;
    console.log(children['props'].children[0]['props'].children.offsetWidth);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-icon', 'left')}>
                <Icon icon="raphael:arrowleft" />
            </div>
            {children}
            <div className={cx('slide-icon', 'right')}>
                <Icon icon="raphael:arrowright" />
            </div>
        </div>
    );
}

export default Slider;
