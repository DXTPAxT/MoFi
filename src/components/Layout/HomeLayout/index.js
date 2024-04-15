import Sidebar1 from '../components/Sidebar1';
import Sidebar2 from '../components/Sidebar2';

import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
    return (
        <div className="row h100">
            <Sidebar1 />
            <div className={cx('content', 'col-7', 'h100')}>{children}</div>
            <Sidebar2 />
        </div>
    );
}

export default HomeLayout;
