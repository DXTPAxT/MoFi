import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';

import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function SlideShow(props) {
    const [currentItem, setCurrentItem] = useState(0);

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

        console.log(currentItem);
    }, [currentItem]);

    useEffect(() => {
        if (props.autoScrollTime) {
            setInterval(() => {
                MoveToNextItem();
            }, props.autoScrollTime * 1000);
        }
    }, []);

    function MoveToPrevItem() {
        setCurrentItem((prev) => prev - 1);
    }

    function MoveToNextItem() {
        if (currentItem == props.maxItem - 1) {
            setCurrentItem(0);
        } else {
            setCurrentItem((prev) => prev + 1);
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
                                currentItem === 0
                                    ? ' hide'
                                    : '') +
                                ((navigationDirection === 'bottom' ||
                                    navigationDirection === 'right') &&
                                currentItem === props.maxItem - 1
                                    ? ' hide'
                                    : '')
                            }
                            onClick={
                                navigationDirection == 'left' ||
                                navigationDirection == 'top'
                                    ? MoveToPrevItem
                                    : MoveToNextItem
                            }
                            style={{
                                ...props.navigationStyles,
                                [navigationDirection]: `${props.navigationDistance}px`,
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
        </div>
    );
}

export default SlideShow;
