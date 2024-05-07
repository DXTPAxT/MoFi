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
    ];

    const slideItemRef = useRef();

    return (
        <SlideShow max={4} ns={{ width: '114%' }}>
            {movieListDemo.map((Movie, i) => {
                return (
                    <div ref={slideItemRef} className={cx('slide-item')} key={i}>
                        <MovieCard thumb={Movie.thumb} id={Movie.id} />
                    </div>
                );
            })}
        </SlideShow>
    );
}

export default TopRated;
