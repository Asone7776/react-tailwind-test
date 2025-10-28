import CrudList from '@shared/components/crud/list.tsx';
import { useCarTypes } from '@entities/car-type/hooks/useCarTypes.ts';
import { columns } from '@features/admin/car-type/table/columns.tsx';
import CreateCarType from '@features/admin/car-type/create.tsx';

const CarTypesList = () => {
  const { isLoading, data, refetch } = useCarTypes();

  return (
    <>
      <CrudList
        data={data}
        columns={columns}
        hasSearch={true}
        isLoading={isLoading}
        onRefetch={refetch}
      >
        <CreateCarType />
      </CrudList>
    </>
  );
};

export default CarTypesList;
