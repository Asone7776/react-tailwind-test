import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import RedirectToAuth from '@utils/redirects/redirect-to-auth.tsx';
import { ROUTES } from '@utils/constants.ts';

const Home = lazy(() => import('@pages/admin/home'));
const Companies = lazy(() => import('@pages/admin/companies'));
const Branches = lazy(() => import('@pages/admin/branches'));
const Orders = lazy(() => import('@pages/admin/orders'));
const Roles = lazy(() => import('@pages/admin/roles'));
const Profile = lazy(() => import('@pages/admin/profile'));

const Default = lazy(() => import('@layouts/default'));
const AuthLayout = lazy(() => import('@layouts/auth'));

const Index = lazy(() => import('@pages/auth'));
const NotFound = lazy(() => import('@pages/not-found'));

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    Component: Default,
    children: [
      { index: true, Component: Home, handle: { title: 'Главная' } },
      {
        path: ROUTES.COMPANIES,
        Component: Companies,
        handle: { title: 'Компании' },
      },
      {
        path: ROUTES.BRANCHES,
        Component: Branches,
        handle: { title: 'Филиалы' },
      },
      { path: ROUTES.ORDERS, Component: Orders, handle: { title: 'Заказы' } },
      { path: ROUTES.ROLES, Component: Roles, handle: { title: 'Роли' } },
      {
        path: ROUTES.PROFILE,
        Component: Profile,
        handle: { title: 'Профиль' },
      },
    ],
  },
  {
    path: ROUTES.AUTH,
    Component: AuthLayout,
    children: [{ index: true, Component: Index }],
  },
  {
    path: ROUTES.INDEX,
    Component: RedirectToAuth,
  },
  {
    path: ROUTES.ALL,
    Component: NotFound,
  },
]);
