import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppSidebar } from '@shared/components/sidebar/app-sidebar';
import { SiteHeader } from '@widgets/header';
import { SidebarInset, SidebarProvider } from '@shared/components/ui/sidebar';
import GlobalLoading from '@shared/components/loading/global.tsx';
import OutletWrapper from '@shared/components/outlet-wrapper.tsx';
import AuthWrapper from '@shared/components/auth/auth-wrapper.tsx';

export default function DefaultLayout() {
  return (
    <AuthWrapper>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <Suspense fallback={<GlobalLoading />}>
            <OutletWrapper>
              <Outlet />
            </OutletWrapper>
          </Suspense>
        </SidebarInset>
      </SidebarProvider>
    </AuthWrapper>
  );
}
