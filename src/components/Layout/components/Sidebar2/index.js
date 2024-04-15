import classNames from 'classnames/bind';
import styles from './Sidebar2.module.scss';

const cx = classNames.bind(styles);

function Sidebar2() {
    return <aside className={cx('wrapper', 'col-3', 'h100')}></aside>;
}

export default Sidebar2;
