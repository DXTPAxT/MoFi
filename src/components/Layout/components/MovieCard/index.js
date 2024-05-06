import styles from './MovieCard.module.scss';
import classNames from 'classnames/bind';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddBtnStyle, WatchBtnStyle } from './BtnStyles';

const cx = classNames.bind(styles);

function MovieCard(prop) {
    const MovieThumb = prop.thumb;

    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${MovieThumb})` }}>
            <div className={cx('layer')}>
                <div className={cx('movie-content')}>
                    <div className={cx('movie-name')}>
                        <span>Quái Vật Godzilla Trừ Một</span>
                    </div>
                    <div className={cx('movie-features')}>
                        <div className={cx('movie-eps')}>
                            <span>1 ep</span>
                        </div>
                        <div className={cx('movie-genres')}>
                            <span>Khoa Học Viễn Tưởng, Kinh dị, Hành động</span>
                        </div>
                    </div>
                </div>

                <div className={cx('btn-group')}>
                    <Button size="large" sx={AddBtnStyle}>
                        <AddIcon sx={{ fontSize: '2.4rem' }} />
                    </Button>
                    <Button size="large" sx={WatchBtnStyle}>
                        Watch
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
