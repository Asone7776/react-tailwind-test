import { instance } from '@shared/api/instance.ts';
import { QueryParams } from '@custom-types/crud-list.ts';

export const crudApi = {
  get: (url: string, params?: QueryParams) =>
    instance.get(url, { params }).then((res) => res.data),
  post: <T>(url: string, payload: T) =>
    instance.post(url, payload).then((res) => res.data),
  put: <T>(url: string, payload: Partial<T>) =>
    instance.put<T>(url, payload).then((res) => res.data),
  patch: <T>(url: string, payload: Partial<T>) =>
    instance.patch<T>(url, payload).then((res) => res.data),
  delete: (url: string) => instance.delete(url),
};
