const options = {
    menu: [
        { path: '/', icon: 'mingcute:home-2-fill', content: 'Home' },
        { path: '/discover', icon: 'iconamoon:discover-fill', content: 'Discover' },
        { path: '/awards', icon: 'bi:award-fill', content: 'Awards' },
        {
            path: '/celebrities',
            icon: 'material-symbols:award-star-rounded',
            content: 'Celebrities',
        },
    ],
    library: [
        { path: '/recent', icon: 'mdi:clock', content: 'Recent' },
        { path: '/topRated', icon: 'mingcute:star-fill', content: 'Top rated' },
        { path: '/watchList', icon: 'ph:list-star-bold', content: 'Watchlist' },
    ],
    general: [
        { path: '/settings', icon: 'mingcute:settings-3-fill', content: 'Settings' },
        { path: '/logout', icon: 'clarity:logout-solid', content: 'Log out' },
    ],
};

export default options;
