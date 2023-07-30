import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ErrorPage from './pages/error_page';
import EditProfile from './pages/user/EditProfile';
import ConfirmCode from './pages/user/ConfirmEmail';
import Home from './pages/Home';
import Search from './pages/Search';
import Categories from './pages/Categories';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />,
                children: [{ path: 'categories/:id', element: <Categories /> }],
            },
            { path: 'login', element: <Login /> },
            {
                path: 'create-account',
                element: <CreateAccount />,
            },
            { path: 'edit-profile', element: <EditProfile /> },
            { path: 'confirm-code', element: <ConfirmCode /> },
            { path: 'search', element: <Search /> },
        ],
    },
]);

export default router;
