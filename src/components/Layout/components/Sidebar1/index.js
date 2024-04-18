import logo from '~/assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import classNames from 'classnames/bind';
import styles from './Sidebar1.module.scss';
import options from './options.js';

const cx = classNames.bind(styles);

function Sidebar1() {
    function handleLinkClick(e) {
        if (document.querySelector('.activeText')) {
            document.querySelector('.activeText').classList.remove('activeText');
        }

        const pageLink = e.target.closest('a');

        if (pageLink) {
            pageLink.classList.add('activeText');
        }
    }

    return (
        <aside className={cx('wrapper', 'col-2', 'h100')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-container', 'notLink')}>
                    <img src={logo} alt="logo" className={cx('logo')} />
                </Link>

                <ul className={cx('aside-options')}>
                    {Object.keys(options).map((session, index) => (
                        <li key={index}>
                            <ul>
                                {`${session[0].toUpperCase()}` + `${session.substring(1)}`}

                                {options[session].map((option, index) => (
                                    <li className={cx('option')} onClick={handleLinkClick} key={index}>
                                        <Link
                                            to={option.path}
                                            className={
                                                window.location.pathname == option.path ||
                                                (window.location.pathname.includes(option.path) && option.path != '/')
                                                    ? 'activeText'
                                                    : null
                                            }
                                        >
                                            <Icon icon={option.icon} className={cx('option-icon')} />
                                            {option.content}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar1;
