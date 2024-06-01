import React, {Suspense, lazy} from 'react';
import {Link, RouterProvider, createBrowserRouter} from 'react-router-dom';
import {Button, ErrorScreen} from '../../shared-components';
import {LoadingScreen} from '../../shared-components/loading-screen';
import {Layout} from '../layout';

const HomePage = lazy(() => import('../home-page/HomePage'));
const UsersPage = lazy(() => import('../users-page/UsersPage'));
const UserPage = lazy(() => import('../user-page/UserPage'));

// TODO: private and public routes when user authorization is implemented
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/users',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: '/users/:id',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <ErrorScreen
            title={404}
            message={'Page not found'}
            action={
              <Link to={'/'}>
                <Button type={'primary'}>Go home</Button>
              </Link>
            }
          />
        ),
      },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export {Router};
