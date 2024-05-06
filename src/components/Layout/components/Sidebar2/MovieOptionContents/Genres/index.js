import styles from './Genres.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Genres() {
    return <div className={cx('wrapper')}>Genres</div>;
}

export default Genres;
