import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function Slide({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Slide;
