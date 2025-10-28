import { Translation } from '@custom-types/translations.ts';

export interface CarType {
  id: number;
  type: string;
  translations?: Translation[];
  created_at: Date;
  updated_at: Date;
}
