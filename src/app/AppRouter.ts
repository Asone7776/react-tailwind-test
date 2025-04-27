import {createBrowserRouter} from "react-router";
import Home from "@pages/home";
import Contact from "@pages/contact";
import Default from "@layouts/default.tsx";
import AuthLayout from "@layouts/auth.tsx";
import Index from "@pages/auth";

export const router = createBrowserRouter([
    {
        path: "admin",
        Component: Default,
        children: [
            {index: true, Component: Home,handle:{title:'Главная'}},
            {path: 'contacts', Component: Contact,handle:{title:'Контакты'}},
        ],
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {index: true, Component: Index},
        ],
    },
]);
