import { useQuery } from '@tanstack/react-query';
import { fetchCarTypes } from '@entities/car-type/api/fetchCarTypes.ts';
import { Models } from '@shared/api/crud/models.ts';

export const useCarTypes = () => {
  return useQuery({
    queryKey: [Models.car_type],
    queryFn: fetchCarTypes,
  });
};
