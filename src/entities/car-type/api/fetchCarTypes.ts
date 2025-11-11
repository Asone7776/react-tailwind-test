import { instance } from '@shared/api/instance.ts';
import { ModelConfig } from '@shared/api/crud/models.ts';
import { CarType } from '@entities/car-type/model';
import { ResponseWithPagination } from '@custom-types/pagination.ts';
import { CreateCarTypeSchemaType } from '@entities/car-type/schemas/createCarType.ts';

export const fetchCarTypes = async (): Promise<
  ResponseWithPagination<CarType>
> => {
  const { data } = await instance.get<ResponseWithPagination<CarType>>(
    ModelConfig.car_type.url,
  );
  return data;
};
export const addCarType = (
  carType: CreateCarTypeSchemaType,
): Promise<CarType> => {
  return instance.post(ModelConfig.car_type.url, carType);
};
