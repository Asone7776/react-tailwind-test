import {ColumnDef} from "@tanstack/react-table"

export type Recipe = {
    id: number
    name: string
}

export const columns: ColumnDef<Recipe>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Название",
    },
]