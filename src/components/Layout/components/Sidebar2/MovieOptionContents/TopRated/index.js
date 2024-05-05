import styles from './TopRated.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TopRated() {
    return <div className={cx('wrapper')}>Top rated</div>;
}

export default TopRated;
