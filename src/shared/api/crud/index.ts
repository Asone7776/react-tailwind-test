import {instance} from "@shared/api/instance.ts";
import {ResponseWithPagination} from "@custom-types/pagination.ts";

export const crudApi = {
    list: <T>(url: string) => instance.get<ResponseWithPagination<T>>(url).then(res => res.data),
    show: <T>(url: string, id: number | string) => instance.get<T>(`${url}/${id}`).then(res => res.data),
    create: <T>(url: string, payload: T) => instance.post<T>(url, payload).then(res => res.data),
    update: <T>(url: string, id: number | string, payload: Partial<T>) => instance.put<T>(`${url}/${id}`, payload).then(res => res.data),
    delete: <T>(url: string, id: number | string) => instance.delete<T>(`${url}/${id}`)
}