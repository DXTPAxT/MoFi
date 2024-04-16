import logo from '~/assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Sidebar1.module.scss';
import options from './options.js';

const cx = classNames.bind(styles);

function Sidebar1() {
    const [currentRoute, setCurrentRoute] = useState(null);

    useEffect(() => {
        if (document.querySelector('.activeText')) {
            document.querySelector('.activeText').classList.remove('activeText');
        }

        console.log(currentRoute);

        const links = document.querySelectorAll(`a:not(a[class~='notLink'])`);

        if (!currentRoute) {
            setCurrentRoute(links[0]);
        }

        if (currentRoute) {
            currentRoute.classList.add('activeText');
        }
    }, [currentRoute]);

    function handleLinkClick(e) {
        const pageLink = e.target.closest('a');
        setCurrentRoute(pageLink);
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
                                        <Link to={option.path}>
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
