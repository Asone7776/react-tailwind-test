import {createBrowserRouter} from "react-router";
import Home from "@pages/home";
import Contact from "@pages/contact";
import Default from "@layouts/default.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Default,
        children: [
            {index: true, Component: Home,handle:{title:'Главная'}},
            {path: 'contacts', Component: Contact,handle:{title:'Контакты'}},
        ],
    },
]);
