import {useCallback, useState} from 'react';
import {CrudListParams} from "@custom-types/crud-list.ts";
import CrudToolbar from "@shared/components/crud/toolbar";
import CrudTable from "@shared/components/crud/table";
import CrudTablePagination from "@shared/components/crud/table/pagination";
import {instance} from "@shared/api/instance.ts";
import {ResponseWithPagination} from "@custom-types/pagination.ts";
import useSWR from "swr";
import CrudDialog from "@shared/components/crud/dialog";
import {Button} from "@shared/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";
import UniversalForm from "@shared/components/crud/universal-form";


interface QueryParams {
    search?: string;
    page?: number;
    limit?: number;
}

function CrudList<T, >({config, hasSearch, columns, form}: CrudListParams<T>) {
    const [query, setQuery] = useState<QueryParams>({});
    const [dialog, setDialog] = useState(false);
    const {
        data,
    } = useSWR<ResponseWithPagination<T>>([config.url, query], ([url, query]) => instance.get(url, {
        params: query
    }));
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
    }, [setDialog])

    return (
        <div className={'flex flex-col gap-4'}>
            <CrudToolbar hasSearch={hasSearch} changeSearch={changeSearch}>
                {form && (
                    <Button onClick={() => changeDialogState(true)} variant={'secondary'}
                            className={'ml-0 mr-auto hover:bg-primary hover:text-black'}>
                        <PlusIcon/>
                    </Button>
                )}
            </CrudToolbar>
            {form && (
                <CrudDialog open={dialog} onClose={() => changeDialogState(false)}>
                    <UniversalForm {...form} />
                </CrudDialog>
            )}
            {columns && (
                <CrudTable<T> columns={columns} data={data?.data.data ?? []}>
                    <CrudTablePagination/>
                </CrudTable>
            )}
        </div>
    );
}

export default CrudList;