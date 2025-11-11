import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCarType } from '@entities/car-type/api/fetchCarTypes.ts';
import { Models } from '@shared/api/crud/models.ts';

export const useAddCarType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCarType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Models.car_type] });
    },
  });
};
