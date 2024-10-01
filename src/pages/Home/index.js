import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Sidebar from '~/components/Layout/components/Sidebar';
import { useEffect, useRef, useState } from 'react';

import { Icon } from '@iconify/react';
import MyCard from '~/components/Layout/components/MyCard';
import SlideShow from '~/components/Layout/components/SlideShow';
import MovieThumb from '~/assets/img/filmThumb_demo.webp';

const cx = classNames.bind(styles);

function Home() {
    const PageList = ['Movies', 'TV Shows'];
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

    const [currentType, setCurrentType] = useState(PageList[0]);

    function changePage(Page) {
        setCurrentType(Page);
    }

    useEffect(() => {
        const line = document.querySelector(
            `.${styles['header-list']} .${styles['line']}`,
        );

        const activeItem = document.querySelector(
            `.${styles['header-item']}.${styles['active']}`,
        );

        line.style.left = `${activeItem.offsetLeft}px`;
        line.style.width = `${activeItem.offsetWidth}px`;
    }, [currentType]);

    return (
        <div className={cx('wrapper') + ' row h100'}>
            <div className={cx('content', 'col-7', 'h100')}>
                {/* Header */}
                <div className={cx('header')}>
                    <div className={cx('header-list')}>
                        {PageList.map((Page, i) => {
                            return (
                                <div
                                    key={i}
                                    className={cx(
                                        'header-item',
                                        currentType == Page ? 'active' : null,
                                    )}
                                    onClick={() => changePage(Page)}
                                >
                                    <span>{Page}</span>
                                </div>
                            );
                        })}
                        <div className={cx('line')}></div>
                    </div>
                    <div className={cx('search-container')}>
                        <div className={cx('search-icon')}>
                            <Icon icon="lets-icons:search-duotone" />
                        </div>
                        <input
                            id="searchInput"
                            placeholder=" "
                            autoComplete="off"
                            type="text"
                            className={cx('search-input')}
                        />
                        <label htmlFor="searchInput" className={cx('placeHolder')}>
                            Search
                        </label>
                    </div>
                </div>

                {/* SlideShow */}
                <div className={cx('movieList')}>
                    <SlideShow
                        maxItem={movieListDemo.length}
                        ns={{
                            height: '360px',
                            padding: '0',
                            marginTop: '32px',
                            width: '720px',
                            maxWidth: '100%',
                            borderRadius: '16px',
                            backgroundColor: 'transparent',
                            boxShadow: ' #000 2px 2px 4px',
                        }}
                        firstItem={0}
                        slideItemDis={0}
                        centerItemsSize={0}
                        navigation={['right', 'left']}
                        navigationDistance={-10}
                        navigationStyles={{
                            width: '46px',
                            height: '60px',
                            top: 'calc(50% - 38px)',
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }}
                        listSpeed={1}
                        autoScrollTime={3}
                        itemList={movieListDemo}
                        loop
                    >
                        {movieListDemo.map((Movie, i) => {
                            return (
                                <div
                                    ref={slideItemRef}
                                    className={cx('slide-item')}
                                    key={i}
                                >
                                    <MyCard
                                        thumb={Movie.thumb}
                                        id={Movie.id}
                                        styles={{
                                            height: '100%',
                                            width: '720px',
                                            maxWidth: ' 100%',
                                        }}
                                        type="theatre"
                                    />
                                </div>
                            );
                        })}
                    </SlideShow>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default Home;
