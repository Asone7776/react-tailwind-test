import '@app/index.css';
import "@app/locales/i18n.ts";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router";
import {ThemeProvider} from "@app/providers/theme-provider.tsx";
import {router} from "@app/AppRouter.ts";
import {Toaster} from "@shared/components/ui/sonner";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster position={'top-right'} richColors={true}/>
        <ThemeProvider defaultTheme={'dark'} storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
)
