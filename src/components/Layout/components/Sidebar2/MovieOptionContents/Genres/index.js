import styles from './Genres.module.scss';
import classNames from 'classnames/bind';

import SlideShow from '~/components/Layout/components/SlideShow';
import MovieCard from '~/components/Layout/components/MovieCard';
import demoThumb from '~/assets/img/genresDemo.jpg';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Genres() {
    const genres = [
        { thumb: demoThumb, name: 'drama' },
        { thumb: demoThumb, name: 'drama' },
        { thumb: demoThumb, name: 'drama' },
        { thumb: demoThumb, name: 'drama' },
    ];

    const genre = useRef();

    return (
        <div>
            <SlideShow>
                {genres.map((genre, i) => {
                    return (
                        <div ref={genre}>
                            <MovieCard
                                key={i}
                                thumb={genre.demoThumb}
                                name={genre.name}
                            />
                        </div>
                    );
                })}
            </SlideShow>
        </div>
    );
}

export default Genres;
