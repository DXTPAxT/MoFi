import classNames from 'classnames/bind';
import styles from './Sidebar2.module.scss';
import { Icon } from '@iconify/react';

import Button from '~/components/Layout/components/Button';
import avatar from '~/assets/img/avatar.jpg';

const cx = classNames.bind(styles);

function Sidebar2() {
    return (
        <aside className={cx('wrapper', 'col-3', 'h100')}>
            <div className={cx('inner')}>
                <div className={cx('account-container')}>
                    <div className={cx('account-noti-container')}>
                        <div className={cx('account-noti-count')}>3</div>
                        <Icon icon="solar:bell-bold" className={cx('account-noti')} />
                    </div>

                    <div className={cx('account-wrapper')}>
                        <div className={cx('account-name')}>Samatha Smith</div>

                        <div className={cx('account-options-btn')}>
                            <Button styles="move" size="medium" direction="down" />
                        </div>

                        <div>
                            <img src={avatar} className={cx('account-avatar')} />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar2;
