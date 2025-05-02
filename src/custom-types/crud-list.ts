import {ModelEntity} from "@shared/api/crud/models.ts";
import {ColumnDef} from "@tanstack/react-table";

export interface CrudListParams<T> {
    config: ModelEntity,
    hasSearch?: boolean,
    hasAdd?: boolean,
    hasDelete?: boolean,
    columns?: ColumnDef<T>[],
}

