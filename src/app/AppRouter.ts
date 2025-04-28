import {lazy} from "react";
import {createBrowserRouter} from "react-router";

const Home = lazy(() => import("@pages/home"));
const Contact = lazy(() => import("@pages/contact"));
const Default = lazy(() => import("@layouts/default"));
const AuthLayout = lazy(() => import("@layouts/auth"));
const Index = lazy(() => import("@pages/auth"));
const NotFound = lazy(() => import("@pages/not-found"));


export const router = createBrowserRouter([
    {
        path: "admin",
        Component: Default,
        children: [
            {index: true, Component: Home, handle: {title: 'Главная'}},
            {path: 'contacts', Component: Contact, handle: {title: 'Контакты'}},
        ],
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {index: true, Component: Index},
        ],
    },
    {
        path: "*",
        Component: NotFound
    }
]);
