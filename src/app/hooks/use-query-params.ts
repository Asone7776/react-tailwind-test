import { useSearchParams } from 'react-router';
import { useCallback } from 'react';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const get = useCallback(
    (key: string): string | null => searchParams.get(key),
    [searchParams],
  );

  const set = useCallback(
    (key: string, value: string | string[]) => {
      const params = new URLSearchParams(searchParams);

      if (Array.isArray(value)) {
        params.delete(key);
        value.forEach((v) => params.append(key, v));
      } else if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      setSearchParams(params, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  const remove = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(key);
      setSearchParams(params, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  return { get, set, remove, all: searchParams };
};
