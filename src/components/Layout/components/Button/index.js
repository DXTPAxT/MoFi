import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Icon } from '@iconify/react';

const cx = classNames.bind(styles);

function Button(props) {
    const padding = props.padding;
    const size = props.size;
    const direction = props.direction;
    switch (props.styles) {
        case `move`:
            return (
                <div className={cx('general', 'feature', size, padding)}>
                    <Icon icon={`ep:arrow-${direction}-bold`} />
                </div>
            );
        case `add`:
            return <div className={cx('general')}> add </div>;
        case `watch`:
            return <div className={cx('general')}> watch </div>;
        default:
            return <div className={cx('general')}> Invalid </div>;
    }
}

export default Button;
