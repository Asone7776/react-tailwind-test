import {Suspense} from "react";
import {Outlet} from "react-router";
import GlobalLoading from "@shared/components/loading/global.tsx";

function AuthLayout() {
    return (
        <main>
            <Suspense fallback={<GlobalLoading/>}>
                <Outlet/>
            </Suspense>
        </main>
    );
}

export default AuthLayout;