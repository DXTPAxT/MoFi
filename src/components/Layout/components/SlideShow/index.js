import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';

import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function SlideShow(props) {
    const [currentItem, setCurrentItem] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const intervalIdRef = useRef(null);

    const slideListRef = useRef();

    useEffect(() => {
        const slideItemWidth = props.children[0].ref.current.offsetWidth;

        if (currentItem == 0) {
            slideListRef.current.style.transform = `translateX(${props.firstItem}px)`;
        } else {
            slideListRef.current.style.transform = `translateX( ${
                (slideItemWidth + props.slideItemDis) * -currentItem +
                props.centerItemsSize
            }px )`;
        }

        if (props.listSpeed) {
            slideListRef.current.style.transition = `ease ${props.listSpeed}s`;
        }

        if (props.autoScrollTime) {
            const indexImagesList = document.querySelector(
                `.${styles['index-images-list']}`,
            );
            const indexItems = document.querySelectorAll(`.${styles['index-item']}`);
            const indexItem = document.querySelector(`.index-item-${currentItem}`);

            if (currentItem == 0 || currentItem == 1) {
                indexImagesList.style.transform = `translateX(calc(-50% + ${
                    indexItem.offsetWidth * 3
                }px))`;
            } else if (currentItem >= 2 && currentItem < props.maxItem - 3) {
                indexImagesList.style.transform = `translateX(calc(-50% - ${
                    (currentItem - 1) * (indexItem.offsetWidth + 3.6) -
                    indexItem.offsetWidth * 3
                }px))`;
            } else if (
                currentItem >= props.maxItem - 3 &&
                currentItem <= props.maxItem - 1
            ) {
                indexImagesList.style.transform = `translateX(calc(-50% - ${
                    (props.maxItem - 5) * (indexItem.offsetWidth + 3.6) -
                    indexItem.offsetWidth * 3
                }px))`;
            }

            Array.from(indexItems).forEach((item) => {
                item.style.backgroundColor = 'transparent';
            });
            indexItem.style.backgroundColor = '#ccc';
        }
    }, [currentItem]);

    useEffect(() => {
        startAutoScroll();

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [currentItem]);

    function MoveToPrevItem() {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null; // Đặt lại ref về null
        }

        setIsDisabled(true);

        setCurrentItem((prev) => {
            if (prev === 0) {
                return props.maxItem - 1;
            } else {
                return prev - 1;
            }
        });

        setTimeout(() => {
            setIsDisabled(false);
            startAutoScroll(); // Khởi động lại autoscroll
        }, props.listSpeed * 1000);
    }

    function MoveToNextItem() {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null; // Đặt lại ref về null
        }

        setIsDisabled(true);

        setCurrentItem((prev) => {
            if (prev === props.maxItem - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });

        setTimeout(() => {
            setIsDisabled(false);
            startAutoScroll(); // Khởi động lại autoscroll
        }, props.listSpeed * 1000);
    }

    function startAutoScroll() {
        // Dừng interval cũ nếu đang chạy
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }

        if (props.autoScrollTime) {
            // Khởi tạo interval mới và lưu lại ID
            intervalIdRef.current = setInterval(() => {
                MoveToNextItem();
            }, props.autoScrollTime * 1000);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')} style={props.ns}>
                <div
                    className={cx('slide-list')}
                    ref={slideListRef}
                    style={props.listStyles}
                >
                    {props.children}
                </div>
            </div>

            {props.navigation &&
                props.navigation.map((navigationDirection, i) => {
                    return (
                        <div
                            key={i}
                            className={
                                cx('slide-icon', navigationDirection) +
                                ((navigationDirection === 'top' ||
                                    navigationDirection === 'left') &&
                                !props.loop &&
                                currentItem === 0
                                    ? ' hide'
                                    : '') +
                                ((navigationDirection === 'bottom' ||
                                    navigationDirection === 'right') &&
                                !props.loop &&
                                currentItem === props.maxItem - 1
                                    ? ' hide'
                                    : '')
                            }
                            onClick={
                                !isDisabled &&
                                (navigationDirection == 'left' ||
                                navigationDirection == 'top'
                                    ? MoveToPrevItem
                                    : MoveToNextItem)
                            }
                            style={{
                                ...props.navigationStyles,
                                [navigationDirection]: `${props.navigationDistance}px`,
                                pointerEvents: isDisabled ? 'none' : 'auto',
                            }}
                        >
                            <Icon
                                icon={`simple-line-icons:arrow-${
                                    (navigationDirection == 'top' && 'up') ||
                                    (navigationDirection == 'bottom' && 'down') ||
                                    navigationDirection
                                }`}
                            />
                        </div>
                    );
                })}

            {props.autoScrollTime && (
                <div className={cx('index-images')}>
                    <div className={cx('index-images-list')}>
                        {props.itemList.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className={cx(
                                        'index-item',
                                        `index-item-${i}`,
                                        `${currentItem == i ? 'activeIndexItem' : ''}`,
                                    )}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SlideShow;
