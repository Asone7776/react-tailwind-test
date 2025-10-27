import { instance } from '@shared/api/instance.ts';
import { ModelConfig } from '@shared/api/crud/models.ts';

export const fetchCarTypes = async () => {
  const { data } = await instance.get(ModelConfig.car_type.url);
  return data;
};
