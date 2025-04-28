import {Suspense} from "react";
import {Outlet} from "react-router";
import {AppSidebar} from "@shared/components/sidebar/app-sidebar";
import {SiteHeader} from "@widgets/header";
import {SidebarInset, SidebarProvider} from "@shared/components/ui/sidebar"
import GlobalLoading from "@shared/components/loading/global.tsx";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset"/>
            <SidebarInset>
                <SiteHeader/>
                <main>
                    <Suspense fallback={<GlobalLoading/>}>
                        <Outlet/>
                    </Suspense>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
