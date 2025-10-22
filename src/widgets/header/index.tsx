import { Separator } from '@shared/components/ui/separator';
import { SidebarTrigger } from '@shared/components/ui/sidebar';
import { useMatcher } from '@shared/hooks/useMatcher';
import { ModeToggle } from '@shared/components/switchers/theme';

export function SiteHeader() {
  const { current } = useMatcher();
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">
          {current?.handle?.title ?? null}
        </h1>
        <div className={'ml-auto mr-0'}>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
