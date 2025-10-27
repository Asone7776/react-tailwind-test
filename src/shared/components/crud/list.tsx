import { useCallback, useState } from 'react';
import { CrudListParams } from '@custom-types/crud-list.ts';
import CrudToolbar from '@shared/components/crud/toolbar';
import CrudTable from '@shared/components/crud/table';
import CrudTablePagination from '@shared/components/crud/table/pagination';
import FilterSheet from '@shared/components/crud/table/filters/filter-sheet.tsx';

function CrudList<T>({
  hasSearch,
  columns,
  isLoading,
  data,
  children,
}: CrudListParams<T>) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const changeSearch = useCallback((value: string) => {
    console.log(value);
  }, []);

  // const changeDialogState = useCallback(
  //   (value: boolean) => {
  //     setDialog(value);
  //   },
  //   [setDialog],
  // );

  const changeFilterState = useCallback(
    (value: boolean) => {
      setFilterIsOpen(value);
    },
    [setFilterIsOpen],
  );

  const onReload = useCallback(async () => {
    // await refetch();
  }, []);

  return (
    <div className={'flex flex-col gap-4'}>
      <CrudToolbar
        isLoading={isLoading}
        hasSearch={hasSearch}
        changeSearch={changeSearch}
        onRefresh={onReload}
      >
        {children}
        {/*{form && (*/}
        {/*  <>*/}
        {/*    <Button*/}
        {/*      onClick={() => changeDialogState(true)}*/}
        {/*      variant={'secondary'}*/}
        {/*      className={clsx(*/}
        {/*        dialog && 'bg-primary text-black',*/}
        {/*        'hover:bg-primary hover:text-black ml-0 mr-auto',*/}
        {/*      )}*/}
        {/*    >*/}
        {/*      <PlusIcon />*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*      variant={'secondary'}*/}
        {/*      className={clsx(*/}
        {/*        filterIsOpen && 'bg-primary text-black',*/}
        {/*        'hover:bg-primary hover:text-black',*/}
        {/*      )}*/}
        {/*      onClick={() => changeFilterState(true)}*/}
        {/*    >*/}
        {/*      <ListFilterIcon />*/}
        {/*    </Button>*/}
        {/*    <CrudDialog open={dialog} onClose={() => changeDialogState(false)}>*/}
        {/*      <CrudCreate config={config} form={form} />*/}
        {/*    </CrudDialog>*/}
        {/*  </>*/}
        {/*)}*/}
      </CrudToolbar>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
