// import {AxiosResponse} from "axios";

export interface ResponseLinks {
    first?: string;
    last?: string;
    next?: string;
    prev?: string;
}

export interface ResponseMetadata {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number
    to: number;
    total: number;
}

export interface ResponseWithPagination<T> {
    // data: AxiosResponse<T[]>,
    data: T[],
    links: ResponseLinks,
    meta: ResponseMetadata,
    next: string,
    prev: string,
    total: number,
}