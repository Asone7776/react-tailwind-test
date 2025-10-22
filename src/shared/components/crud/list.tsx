import { useCallback, useState } from 'react';
import { CrudListParams, QueryParams } from '@custom-types/crud-list.ts';
import CrudToolbar from '@shared/components/crud/toolbar';
import CrudTable from '@shared/components/crud/table';
import CrudTablePagination from '@shared/components/crud/table/pagination';
import CrudDialog from '@shared/components/crud/dialog';
import { Button } from '@shared/components/ui/button.tsx';
import { ListFilterIcon, PlusIcon } from 'lucide-react';
import CrudCreate from '@processes/crud/create';
import FilterSheet from '@shared/components/crud/table/filters/filter-sheet.tsx';
import { useCrud } from '@shared/hooks/useCrud.ts';
import { clsx } from 'clsx';

function CrudList<T>({ config, hasSearch, columns, form }: CrudListParams<T>) {
  const [query, setQuery] = useState<QueryParams>({});
  const [dialog, setDialog] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const { data, isLoading, refetch } = useCrud<T>(config.url, query);

  const updateQuery = useCallback(
    <T extends keyof QueryParams>(key: T, value: QueryParams[T]) => {
      setQuery((prevState) => {
        return {
          ...prevState,
          [key]: value,
        };
      });
    },
    [],
  );

  const changeSearch = useCallback(
    (value: string) => {
      updateQuery('search', value);
    },
    [updateQuery],
  );

  const changeDialogState = useCallback(
    (value: boolean) => {
      setDialog(value);
    },
    [setDialog],
  );

  const changeFilterState = useCallback(
    (value: boolean) => {
      setFilterIsOpen(value);
    },
    [setFilterIsOpen],
  );

  const onReload = useCallback(async () => {
    await refetch();
  }, [refetch]);

  return (
    <div className={'flex flex-col gap-4'}>
      <CrudToolbar
        isLoading={isLoading}
        hasSearch={hasSearch}
        changeSearch={changeSearch}
        onRefresh={onReload}
      >
        {form && (
          <>
            <Button
              onClick={() => changeDialogState(true)}
              variant={'secondary'}
              className={clsx(
                dialog && 'bg-primary text-black',
                'hover:bg-primary hover:text-black ml-0 mr-auto',
              )}
            >
              <PlusIcon />
            </Button>
            <Button
              variant={'secondary'}
              className={clsx(
                filterIsOpen && 'bg-primary text-black',
                'hover:bg-primary hover:text-black',
              )}
              onClick={() => changeFilterState(true)}
            >
              <ListFilterIcon />
            </Button>
            <CrudDialog open={dialog} onClose={() => changeDialogState(false)}>
              <CrudCreate config={config} form={form} />
            </CrudDialog>
          </>
        )}
      </CrudToolbar>
      <FilterSheet open={filterIsOpen} onOpenChange={changeFilterState} />
      {columns && (
        <CrudTable<T> columns={columns} data={data?.data ?? []}>
          <CrudTablePagination />
        </CrudTable>
      )}
    </div>
  );
}

export default CrudList;
