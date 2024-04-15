import classNames from 'classnames/bind';
import styles from './Sidebar1.module.scss';
import logo from '~/assets/img/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar1() {
    return (
        <aside className={cx('wrapper', 'col-2', 'h100')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-container')}>
                    <img src={logo} alt="logo" className={cx('logo')} />
                </Link>
                <ul className={cx('aside-options')}>
                    <li className={cx('menu-container', 'aside-session')}>
                        <ul className={cx('menu')}>
                            {'Menu'}
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Home
                                </Link>
                            </li>
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Discover
                                </Link>
                            </li>
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Awards
                                </Link>
                            </li>
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Celebrities
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('library-container', 'aside-session')}>
                        <ul className={cx('library')}>
                            {'Library'}
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Recent
                                </Link>
                            </li>
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Top rated
                                </Link>
                            </li>
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Watchlist
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('general-container', 'aside-session')}>
                        <ul className={cx('general')}>
                            {'General'}
                            <li className={cx('option')}>
                                <Link>
                                    <i />
                                    Settings
                                </Link>
                            </li>
                            <li className={cx('option')}>
                                <button>
                                    <i />
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar1;
