import {useCallback, useState} from 'react';
import {CrudListParams, QueryParams} from "@custom-types/crud-list.ts";
import CrudToolbar from "@shared/components/crud/toolbar";
import CrudTable from "@shared/components/crud/table";
import CrudTablePagination from "@shared/components/crud/table/pagination";
import CrudDialog from "@shared/components/crud/dialog";
import {Button} from "@shared/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";
import CrudCreate from "@processes/crud/create";
import {useCrud} from "@shared/hooks/useCrud.ts";


function CrudList<T, >({config, hasSearch, columns, form}: CrudListParams<T>) {
    const [query, setQuery] = useState<QueryParams>({});
    const [dialog, setDialog] = useState(false);
    const {data, isLoading, refetch} = useCrud<T>(config.url, query);


    const updateQuery = useCallback(<T extends keyof QueryParams>(key: T, value: QueryParams[T]) => {
        setQuery((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }, []);

    const changeSearch = useCallback((value: string) => {
        updateQuery('search', value);
    }, [updateQuery]);

    const changeDialogState = useCallback((value: boolean) => {
        setDialog(value);
    }, [setDialog]);


    const onReload = useCallback(async () => {
        await refetch();
    }, [refetch]);

    return (
        <div className={'flex flex-col gap-4'}>
            <CrudToolbar isLoading={isLoading} hasSearch={hasSearch} changeSearch={changeSearch} onRefresh={onReload}>
                {form && (
                    <>
                        <Button onClick={() => changeDialogState(true)} variant={'secondary'}
                                className={'ml-0 mr-auto hover:bg-primary hover:text-black'}>
                            <PlusIcon/>
                        </Button>
                        <CrudDialog open={dialog} onClose={() => changeDialogState(false)}>
                            <CrudCreate config={config} form={form}/>
                        </CrudDialog>
                    </>
                )}
            </CrudToolbar>
            {columns && (
                <CrudTable<T> columns={columns} data={data?.data ?? []}>
                    <CrudTablePagination/>
                </CrudTable>
            )}
        </div>
    );
}

export default CrudList;