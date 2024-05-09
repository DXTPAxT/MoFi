import { useRef } from 'react';
import styles from './TopRated.module.scss';
import classNames from 'classnames/bind';
import MovieThumb from '~/assets/img/filmThumb_demo.webp';

import MovieCard from '~/components/Layout/components/MovieCard';
import SlideShow from '~/components/Layout/components/SlideShow';

const cx = classNames.bind(styles);

function TopRated() {
    const movieListDemo = [
        {
            thumb: MovieThumb,
            id: 1,
        },
        {
            thumb: MovieThumb,
            id: 2,
        },
        {
            thumb: MovieThumb,
            id: 3,
        },
        {
            thumb: MovieThumb,
            id: 4,
        },
        {
            thumb: MovieThumb,
            id: 5,
        },
        {
            thumb: MovieThumb,
            id: 6,
        },
        {
            thumb: MovieThumb,
            id: 7,
        },
        {
            thumb: MovieThumb,
            id: 8,
        },
    ];

    const slideItemRef = useRef();

    return (
        <SlideShow
            maxItem={movieListDemo.length}
            ns={{ width: '124%', padding: '10px 0', transform: 'translateX(-36px)' }}
            slideItemDis={20}
            firstItem={8}
            centerItems={90}
            navigation={['right', 'left']}
            navigationDistance={-20}
            navigationStyles={{
                width: '32px',
                height: '44px',
                top: 'calc(50% - 20px)',
            }}
        >
            {movieListDemo.map((Movie, i) => {
                return (
                    <div ref={slideItemRef} className={cx('slide-item')} key={i}>
                        <MovieCard thumb={Movie.thumb} id={Movie.id} size="small" />
                    </div>
                );
            })}
        </SlideShow>
    );
}

export default TopRated;
