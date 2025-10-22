import { FC, memo, ReactNode } from 'react';
import { RefreshCwIcon } from 'lucide-react';
import { Button } from '@shared/components/ui/button.tsx';
import TableSearch from '@shared/components/search/table-search.tsx';
import cn from 'clsx';

interface CrudToolbar {
  isLoading?: boolean;
  hasSearch?: boolean;
  changeSearch: (value: string) => void;
  children: ReactNode;
  onRefresh?: () => void;
}

const CrudToolbar: FC<CrudToolbar> = memo(
  ({ isLoading, hasSearch, changeSearch, children, onRefresh }) => {
    return (
      <div
        className={'flex flex-col md:flex-row md:items-center gap-2 md:gap-4'}
      >
        <div className="flex gap-4">
          {children}
          <div className={'md:hidden'}>
            <Button
              variant={'secondary'}
              className={'hover:bg-primary hover:text-black'}
            >
              <RefreshCwIcon />
            </Button>
          </div>
        </div>
        {hasSearch && (
          <div className={'w-full md:flex-1'}>
            <TableSearch onChange={changeSearch} />
          </div>
        )}
        <div className={'hidden md:block ml-auto'}>
          <Button
            variant={'secondary'}
            className={'hover:bg-primary hover:text-black'}
            disabled={isLoading}
            onClick={onRefresh}
          >
            <RefreshCwIcon className={cn({ 'animate-spin': isLoading })} />
          </Button>
        </div>
      </div>
    );
  },
);

export default CrudToolbar;
