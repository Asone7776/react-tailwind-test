import {useCallback, useState} from 'react';
import {CrudListParams} from "@custom-types/crud-list.ts";
import CrudToolbar from "@shared/components/crud/toolbar";
import CrudTable from "@shared/components/crud/table";
import {instance} from "@shared/api/instance.ts";
import {ResponseWithPagination} from "@custom-types/pagination.ts";
import useSWR from "swr";

interface QueryParams {
    search?: string;
    page?: number;
    limit?: number;
}

function CrudList<T, >({config, hasSearch, columns}: CrudListParams<T>) {
    const [query, setQuery] = useState<QueryParams>({});
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


    return (
        <div className={'flex flex-col gap-4'}>
            <CrudToolbar hasSearch={hasSearch} changeSearch={changeSearch}/>
            {columns && <CrudTable<T> columns={columns} data={data?.data.data ?? []}/>}
        </div>
    );
}

export default CrudList;