import CrudList from '@shared/components/crud/list.tsx';
import { CrudListParams } from '@custom-types/crud-list.ts';
import { Company } from '@features/admin/companies/table/columns.tsx';
import { useCarTypes } from '@entities/car-type/hooks/useCarTypes.ts';

const CarTypesPage = () => {
  const { isLoading, data } = useCarTypes();
  const props: CrudListParams<Company> = {
    data: data,
    hasSearch: true,
    isLoading,
  };
  return (
    <>
      <CrudList {...props} />
    </>
  );
};

export default CarTypesPage;
