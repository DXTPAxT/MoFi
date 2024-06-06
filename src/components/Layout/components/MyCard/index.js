import styles from './MyCard.module.scss';
import classNames from 'classnames/bind';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddBtnStyle, WatchBtnStyle } from './BtnStyles';

const cx = classNames.bind(styles);

function MyCard(props) {
    const Styles = { ...props.styles, backgroundImage: `url(${props.thumb})` };

    const GenresButtonStyles = {
        height: '100%',
        width: '100%',
        padding: '0',
        borderRadius: '15px',
        fontSize: '1.6rem',
        color: 'var(--text-color)',
        fontFamily: `'Oswald', sans-serif`,
    };

    switch (props.type) {
        case 'movie':
            return (
                <div className={cx('wrapper', 'movie', props.size)} style={Styles}>
                    <div className={cx('layer')}>
                        <div className={cx('content')}>
                            <div className={cx('name')}>
                                <span>Quái Vật Godzilla Trừ {props.id}</span>
                            </div>
                            <div className={cx('features')}>
                                <div className={cx('eps')}>
                                    <span>1 ep</span>
                                </div>
                                <div className={cx('genres')}>
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
        case 'genres':
            return (
                <div className={cx('wrapper', 'genres', props.size)} style={Styles}>
                    <Button sx={GenresButtonStyles}>
                        <div className={cx('layer')}>
                            <div className={cx('name-container')}>
                                <span className={cx('name')}>{props.name}</span>
                            </div>
                        </div>
                    </Button>
                </div>
            );
        case 'theatre':
            return (
                <div className={cx('wrapper', 'theatre', props.size)} style={Styles}>
                    <div className={cx('layer')}>
                        <div className={cx('content')}>
                            <div className={cx('name')}>
                                <span>Quái Vật Godzilla Trừ {props.id}</span>
                            </div>
                            <div className={cx('features')}>
                                <div className={cx('eps')}>
                                    <span>1 ep</span>
                                </div>
                                <div className={cx('genres')}>
                                    <span>Khoa Học Viễn Tưởng, Kinh dị, Hành động</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default MyCard;
