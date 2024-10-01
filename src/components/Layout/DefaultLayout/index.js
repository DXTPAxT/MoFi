import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Nav from '../components/Nav';
// import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('row', 'h100')}>
            <div className={cx('content', 'h100')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
