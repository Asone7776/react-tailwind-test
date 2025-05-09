import {ModelEntity} from "@shared/api/crud/models.ts";
import {FormField} from "@custom-types/form.ts";
import {ColumnDef} from "@tanstack/react-table";
import {z} from "zod";

export interface CrudListParams<T> {
    config: ModelEntity,
    hasSearch?: boolean,
    hasAdd?: boolean,
    hasDelete?: boolean,
    columns?: ColumnDef<T>[],
    form?: {
        schema: z.ZodTypeAny,
        fields: FormField[]
    }
}

