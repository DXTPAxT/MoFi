import styles from './MovieCard.module.scss';
import classNames from 'classnames/bind';

import { Card } from '@mui/material';

const cx = classNames.bind(styles);

function MovieCard() {
    return (
        <div className={cx('wrapper')}>
            <div classNames={cx('content')}>MovieCard</div>
        </div>
    );
}

export default MovieCard;
