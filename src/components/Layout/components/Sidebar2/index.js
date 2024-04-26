import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar2.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';

import Button from '~/components/Layout/components/Button';
import { Icon } from '@iconify/react';
import avatar from '~/assets/img/avatar.jpg';
import { Wrapper as PopperWrapper } from '../Popper';

const cx = classNames.bind(styles);

function Sidebar2() {
    const [visible1, setVisible1] = useState(false);
    const show = () => setVisible1(true);
    const hide = () => setVisible1(false);

    const noti = 1;

    return (
        <aside className={cx('wrapper', 'col-3', 'h100')}>
            <div className={cx('inner')}>
                <div className={cx('account-container')}>
                    <Tippy
                        placement="left-start"
                        visible={visible1}
                        onClickOutside={hide}
                        animation="shift-away"
                        interactive
                        content={
                            <PopperWrapper>
                                <div className={cx('account-noti-list-container')}>
                                    {noti ? (
                                        <div>
                                            <h3 className={cx('account-noti-list-heading')}>Notification</h3>
                                            <div className={cx('account-noti-list')}>
                                                <div className={cx('account-noti')}>
                                                    <div className={cx('account-noti-content')}>
                                                        This is the content of the first notification, This is the
                                                        content of the first notification, This is the content of the
                                                        first notification
                                                    </div>
                                                    <span className={cx('account-noti-time')}>12:20 22/4/2024</span>
                                                </div>
                                                <div className={cx('account-noti')}>
                                                    <div className={cx('account-noti-content')}>
                                                        This is the content of the first notification, This is the
                                                        content of the first notification, This is the content of the
                                                        first notification
                                                    </div>
                                                    <span className={cx('account-noti-time')}>12:20 22/4/2024</span>
                                                </div>
                                                <div className={cx('account-noti')}>
                                                    <div className={cx('account-noti-content')}>
                                                        This is the content of the first notification, This is the
                                                        content of the first notification, This is the content of the
                                                        first notification
                                                    </div>
                                                    <span className={cx('account-noti-time')}>12:20 22/4/2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <span className={cx('no_noti')}>No notification</span>
                                    )}
                                </div>
                            </PopperWrapper>
                        }
                    >
                        <div className={cx('account-noti-container')} onClick={visible1 ? hide : show}>
                            <span className={cx('account-noti-count', noti ? null : 'hide')}>
                                {noti !== 0 ? noti : null}
                            </span>
                            <Icon icon="solar:bell-bold" className={cx('account-noti-icon')} />
                        </div>
                    </Tippy>

                    <div className={cx('account-wrapper')}>
                        <div className={cx('account-name')}>Samatha Smith</div>

                        <Tippy
                            placement="bottom-end"
                            animation="shift-away"
                            interactive
                            trigger="click"
                            content={
                                <PopperWrapper>
                                    <div className={cx('account-options')}>
                                        <div className={cx('account-option')}>Profile</div>
                                        <div className={cx('account-option')}>Watchlist</div>
                                        <div className={cx('account-option')}>Logout</div>
                                    </div>
                                </PopperWrapper>
                            }
                        >
                            <div className={cx('account-options-btn')}>
                                <Button styles="move" size="medium" direction="down" />
                            </div>
                        </Tippy>

                        <div>
                            <img src={avatar} alt="acount-avatar" className={cx('account-avatar')} />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar2;
