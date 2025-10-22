import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router';
import { Button } from '@shared/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';

export type Recipe = {
  id: number;
  name: string;
};

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Название',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.getValue<number>('id');
      return (
        <div className={'flex justify-end'}>
          <Link to={`/admin/recipe/${id}`} viewTransition>
            <Button className={'bg-primary'} size={'icon'} variant={'default'}>
              <ArrowRight />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
