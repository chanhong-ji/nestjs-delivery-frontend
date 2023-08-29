import {
    LoaderFunctionArgs,
    createBrowserRouter,
    redirect,
} from 'react-router-dom';
import { isLoggedInVar } from './apollo';
import Root from './pages/Root';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ErrorPage from './pages/error_page';
import EditProfile from './pages/EditProfile';
import ConfirmCode from './pages/ConfirmEmail';
import Home from './pages/Home';
import Search from './pages/Search';
import Categories from './pages/Categories';
import RestaurantPage from './pages/RestaurantPage';
import MyRestaurants from './pages/owner/MyRestaurants';
import CreateRestaurant from './pages/owner/CreateRestaurant';
import Owner from './pages/owner/Owner';
import MyRestaurant from './pages/owner/MyRestaurant';
import AddDish from './pages/owner/AddDish';
import MyPage from './pages/MyPage';
import Order from './components/Order';
import Dashboard from './components/Dashboard';
import OrdersForOwner from './pages/owner/OrdersForOwner';
import OrdersForClient from './pages/OrdersForClient';

const publicRoutes = [
    {
        element: <Login />,
        path: 'login',
    },
    {
        element: <CreateAccount />,
        path: 'create-account',
    },
];

const privateRoutes = [
    {
        element: <MyPage />,
        path: 'my-page',
    },
    { element: <EditProfile />, path: 'my-page/edit-profile' },
    {
        element: <CreateRestaurant />,
        path: 'my-page/create-restaurant',
    },
    { element: <ConfirmCode />, path: 'confirm-code' },
    { element: <OrdersForClient />, path: 'orders' },
    {
        element: <Owner />,
        path: 'owner',
        children: [
            {
                element: <MyRestaurants />,
                path: '',
            },
            {
                element: <MyRestaurant />,
                path: 'restaurants/:id',
                loader: ({ params: { id } }: LoaderFunctionArgs) => {
                    if (id && isNaN(+id)) return redirect('/');
                    return null;
                },
            },
            {
                element: <AddDish />,
                path: 'restaurants/:id/add-dish',
                loader: ({ params: { id } }: LoaderFunctionArgs) => {
                    if (id && isNaN(+id)) return redirect('/');
                    return null;
                },
            },
            {
                element: <OrdersForOwner />,
                path: 'orders',
            },
        ],
    },
    {
        element: <Order />,
        path: 'orders/:id',
        loader: ({ params: { id } }: LoaderFunctionArgs) => {
            if (id && isNaN(+id)) return redirect('/');
            return null;
        },
    },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />,
                children: [
                    {
                        element: <Categories />,
                        path: 'categories/:id',
                        loader: ({ params: { id } }) => {
                            if (id && isNaN(+id)) return redirect('/');
                            return null;
                        },
                    },
                ],
            },
            {
                element: <RestaurantPage />,
                path: 'restaurants/:id',
                loader: ({ params: { id } }) => {
                    if (id && isNaN(+id)) return redirect('/');
                    return null;
                },
            },
            { element: <Search />, path: 'search' },

            { path: '/dashboard', element: <Dashboard /> },

            ...(isLoggedInVar() ? privateRoutes : publicRoutes),
        ],
    },
]);

export default router;
