import classNames from 'classnames/bind';
import styles from './MovieOption.module.scss';

import { Icon } from '@iconify/react';

const cx = classNames.bind(styles);

function MovieOption(prop) {
    const Content = prop.content;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('option-name-container')}>
                    <span className={cx('option-name')}>{prop.name}</span>
                </div>
                <div className={cx('see-more-container')}>
                    <span className={cx('see-more-text')}>See more</span>
                    <div className={cx('see-more-icon')}>
                        <Icon icon="raphael:arrowright" />
                    </div>
                </div>
            </div>

            <Content />
        </div>
    );
}

export default MovieOption;
