import { ColumnDef } from '@tanstack/react-table';
import { CarType } from '@entities/car-type/model';

export const columns: ColumnDef<CarType>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'type',
    header: 'Тип',
  },
  {
    accessorKey: 'created_at',
    header: 'Дата создания',
  },
];
