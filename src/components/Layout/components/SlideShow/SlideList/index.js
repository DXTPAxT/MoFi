import classNames from 'classnames/bind';
import styles from './SlideList.module.scss';

const cx = classNames.bind(styles);

function SlideList({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default SlideList;
