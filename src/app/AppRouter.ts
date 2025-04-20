import {createBrowserRouter} from "react-router-dom";
import Home from "@pages/home";
import Default from "@layouts/default.tsx";
import Contact from "@pages/contact";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Default,
        children: [
            {index: true, Component: Home},
            {path: "contact", Component: Contact},
        ],
    },
]);
