import styles from './Genres.module.scss';
import classNames from 'classnames/bind';

import SlideShow from '~/components/Layout/components/SlideShow';
import MyCard from '~/components/Layout/components/MyCard';
import demoThumb from '~/assets/img/genresDemo.jpg';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Genres() {
    const genresDemo = [
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
        { thumb: demoThumb, name: 'Drama' },
    ];

    const genreRef = useRef();

    return (
        <div>
            <SlideShow
                maxItem={genresDemo.length - Math.ceil(genresDemo.length / 3)}
                ns={{
                    width: '123%',
                    height: '240px',
                    transform: 'translateX(-36px)',
                    paddingBottom: '6px',
                    display: 'flex',
                }}
                slideItemDis={20}
                firstItem={8}
                centerItemsSize={90}
                navigation={['right', 'left']}
                navigationDistance={-28}
                navigationStyles={{
                    width: '32px',
                    height: '44px',
                    top: 'calc(50% - 20px)',
                }}
                listStyles={{
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                }}
            >
                {genresDemo.map((genre, i) => {
                    return (
                        <div
                            ref={genreRef}
                            key={i}
                            className={cx('genres-item')}
                            style={{
                                width: '200px',
                                flexBasis: (i + 1) % 3 === 0 ? '100%' : '44%',
                            }}
                        >
                            <MyCard
                                thumb={genre.thumb}
                                name={genre.name}
                                styles={{
                                    height: '100%',
                                }}
                                type="genres"
                            />
                        </div>
                    );
                })}
            </SlideShow>
        </div>
    );
}

export default Genres;
