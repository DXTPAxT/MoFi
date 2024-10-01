import logo from '~/assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import options from './options.js';

const cx = classNames.bind(styles);

const activeText = { color: 'var(--primary-color)' };

function Nav() {
    const handleOptionClick = (event) => {
        const clickedOption = event.currentTarget;
        console.log(clickedOption);
        clickedOption.classList.add(`${styles.animate}`);

        setTimeout(() => {
            clickedOption.classList.remove(`${styles.animate}`);
        }, 200);
    };

    return (
        <aside className={cx('wrapper', 'col-2', 'h100')}>
            <div className={cx('inner')}>
                <NavLink to="/" className={cx('logo-container', 'notLink')}>
                    <img src={logo} alt="logo" className={cx('logo')} />
                </NavLink>

                <ul className={cx('aside-options')}>
                    {Object.keys(options).map((session, index1) => (
                        <li key={index1}>
                            <div>
                                <span>
                                    {`${session[0].toUpperCase()}` +
                                        `${session.substring(1)}`}
                                </span>

                                {options[session].map((option, index) => (
                                    <div
                                        className={cx('option')}
                                        key={index}
                                        onClick={handleOptionClick}
                                    >
                                        {!(index1 == 0 && index == 0) && (
                                            <NavLink
                                                to={option.path}
                                                style={({ isActive }) =>
                                                    isActive ? activeText : {}
                                                }
                                            >
                                                <Icon
                                                    icon={option.icon}
                                                    className={cx('option-icon')}
                                                />
                                                {option.content}
                                            </NavLink>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Nav;
