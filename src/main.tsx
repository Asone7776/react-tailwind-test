import '@app/index.css';
import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router";
import {ThemeProvider} from "@app/providers/theme-provider.tsx";
import {router} from "@app/AppRouter.ts";
import GlobalLoading from "@shared/components/loading/global.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme={'dark'} storageKey="vite-ui-theme">
            <Suspense fallback={<GlobalLoading/>}>
                <RouterProvider router={router}/>
            </Suspense>
        </ThemeProvider>
    </StrictMode>,
)
