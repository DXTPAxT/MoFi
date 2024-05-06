import styles from './TopRated.module.scss';
import classNames from 'classnames/bind';
import MovieThumb from '~/assets/img/filmThumb_demo.webp';

import MovieCard from '~/components/Layout/components/MovieCard';
import { Slide, SlideList, Slider } from '~/components/Layout/components/SlideShow';

const cx = classNames.bind(styles);

function TopRated() {
    const movieListDemo = [
        {
            thumb: MovieThumb,
        },
        {
            thumb: MovieThumb,
        },
        {
            thumb: MovieThumb,
        },
        {
            thumb: MovieThumb,
        },
    ];

    return (
        <Slider count={4}>
            <SlideList>
                {movieListDemo.map((Movie, i) => {
                    return (
                        <Slide key={i}>
                            <MovieCard thumb={Movie.thumb} />
                        </Slide>
                    );
                })}
            </SlideList>
        </Slider>
    );
}

export default TopRated;
