import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function usePublicationDetails(id: string) {
  const { data, error, isLoading, mutate } = useSWR(
    `/publications/${id}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublicationDetails };