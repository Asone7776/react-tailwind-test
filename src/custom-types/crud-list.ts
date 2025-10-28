import { ColumnDef } from '@tanstack/react-table';
import { ResponseWithPagination } from '@custom-types/pagination.ts';

export interface QueryParams {
  search?: string;
  page?: number;
  limit?: number;
}

export interface CrudListParams<T> {
  data?: ResponseWithPagination<T>;
  hasSearch?: boolean;
  hasDelete?: boolean;
  isLoading?: boolean;
  onRefetch?: () => void;
  columns?: ColumnDef<T>[];
  children?: React.ReactNode;
}
