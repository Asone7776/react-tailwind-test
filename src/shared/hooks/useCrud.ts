import useSWR from "swr";
import {crudApi} from "@shared/api/crud/index.ts";
import {ResponseWithPagination} from "@custom-types/pagination.ts";
import {QueryParams} from "@custom-types/crud-list.ts";

export const useCrud = <T>(url: string, query: QueryParams) => {
    const {
        data,
        error,
        mutate,
        isLoading
    } = useSWR<ResponseWithPagination<T>>([url, query], ([url, query]: [string, QueryParams]) => crudApi.list<T>(url, query));

    const create = async (payload: T) => {
        await crudApi.create(url, payload);
        mutate();
    }
    const update = async (id: number | string, payload: Partial<T>) => {
        await crudApi.update(url, id, payload);
        mutate();
    }
    const remove = async (id: number | string) => {
        await crudApi.delete(url, id);
        mutate();
    }

    return {
        data,
        error,
        isLoading,
        create,
        update,
        remove,
        refetch: mutate,
    }
}