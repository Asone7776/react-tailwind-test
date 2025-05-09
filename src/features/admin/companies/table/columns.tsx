import {ColumnDef} from "@tanstack/react-table"

export type Company = {
    id: number
    name: string
    status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Company>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Название",
    },
    {
        accessorKey: "status",
        header: "Статус",
    },
    {
        accessorKey: "status",
        header: "Статус",
    },
];