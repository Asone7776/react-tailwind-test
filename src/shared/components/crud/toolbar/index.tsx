import { FC, memo, ReactNode } from 'react';
import { RefreshCwIcon } from 'lucide-react';
import { Button } from '@shared/components/ui/button.tsx';
import TableSearch from '@shared/components/search/table-search.tsx';
import cn from 'clsx';

interface CrudToolbar {
  isLoading?: boolean;
  hasSearch?: boolean;
  changeSearch: (value: string) => void;
  children?: ReactNode;
  onRefresh?: () => void;
}

const CrudToolbar: FC<CrudToolbar> = memo(
  ({ isLoading, hasSearch, changeSearch, children, onRefresh }) => {
    return (
      <div className={'flex flex-row md:items-center'}>
        {hasSearch && (
          <div className={'w-full md:flex-1'}>
            <TableSearch onChange={changeSearch} />
          </div>
        )}
        <div className={'ml-4'}>
          <Button
            variant={'secondary'}
            className={'hover:bg-primary hover:text-black'}
            disabled={isLoading}
            onClick={onRefresh}
          >
            <RefreshCwIcon className={cn({ 'animate-spin': isLoading })} />
          </Button>
        </div>
        <div className="flex ml-4">{children}</div>
      </div>
    );
  },
);

export default CrudToolbar;
