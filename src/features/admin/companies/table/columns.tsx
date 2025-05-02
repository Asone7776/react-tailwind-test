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
]
export const mockData = [
    {
        id: 1,
        name: "Beeline",
        status: "pending",
    },
    {
        id: 2,
        name: "Ucell",
        status: "pending",
    },
    {
        id: 3,
        name: "Perfectum",
        status: "pending",
    },
]