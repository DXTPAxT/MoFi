// Layouts
import { HomeLayout } from '~/components/Layout';

// components
import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Profile from '~/pages/Profile';
import TopRated from '~/pages/TopRated';
import WatchList from '~/pages/WatchList';
import Settings from '~/pages/Settings';
import Recent from '~/pages/Recent';
import Genres from '~/pages/Genres';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/discover', component: Discover },
    { path: '/topRated', component: TopRated },
    { path: '/watchList', component: WatchList },
    { path: '/settings', component: Settings },
    { path: '/recent', component: Recent },
    { path: '/genres', component: Genres },
    { path: '/profile', component: Profile },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
