import { useRef } from 'react';
import styles from './TopRated.module.scss';
import classNames from 'classnames/bind';
import MovieThumb from '~/assets/img/filmThumb_demo.webp';

import MyCard from '~/components/Layout/components/MyCard';
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
            ns={{ width: '123%', padding: '10px 0', transform: 'translateX(-36px)' }}
            slideItemDis={20}
            firstItem={8}
            centerItemsSize={90}
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
                        <MyCard
                            thumb={Movie.thumb}
                            id={Movie.id}
                            styles={{
                                height: '112px',
                                width: '200px',
                            }}
                            type="movie"
                        />
                    </div>
                );
            })}
        </SlideShow>
    );
}

export default TopRated;
