import {ModelEntity} from "@shared/api/crud/models.ts";
import {FormField} from "@custom-types/form.ts";
import {ColumnDef} from "@tanstack/react-table";
import {z, ZodTypeAny} from "zod";

export interface CrudListForm {
    schema: z.ZodTypeAny,
    fields: FormField<z.infer<ZodTypeAny>>[]
}

export interface QueryParams {
    search?: string;
    page?: number;
    limit?: number;
}

export interface CrudListParams<T> {
    config: ModelEntity,
    hasSearch?: boolean,
    hasAdd?: boolean,
    hasDelete?: boolean,
    columns?: ColumnDef<T>[],
    form?: CrudListForm
}

