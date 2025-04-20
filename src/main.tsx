import '@app/index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "@app/AppRouter.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
