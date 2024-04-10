// Layouts
import { ProfileLayout } from '~/components/Layout';

// components
import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Profile from '~/pages/Profile';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/discover', component: Discover },
    { path: '/profile', component: Profile, layout: ProfileLayout },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
