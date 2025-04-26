import {AppSidebar} from "@shared/components/sidebar/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
// import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@widgets/header";
import {SidebarInset, SidebarProvider} from "@shared/components/ui/sidebar"
import {Outlet} from "react-router";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset"/>
            <SidebarInset>
                <SiteHeader />
                <main>
                    <Outlet/>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
