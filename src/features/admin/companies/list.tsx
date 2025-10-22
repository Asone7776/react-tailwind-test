import { FC } from 'react';
import CrudList from '@shared/components/crud/list.tsx';
import { ModelConfig } from '@shared/api/crud/models.ts';
import { CrudListParams } from '@custom-types/crud-list.ts';
import { Company } from '@features/admin/companies/table/columns.tsx';
import { columns } from './table/columns.tsx';

const CompaniesList: FC = () => {
  const props: CrudListParams<Company> = {
    config: ModelConfig.company,
    hasSearch: true,
    columns,
  };
  return (
    <>
      <CrudList {...props} />
    </>
  );
};

export default CompaniesList;
