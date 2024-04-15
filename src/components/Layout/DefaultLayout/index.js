import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Sidebar1 from '../components/Sidebar1';
import Sidebar2 from '../components/Sidebar2';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('row', 'h100')}>
            <Sidebar1 />
            <div className={cx('content', 'col-10', 'h100')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
