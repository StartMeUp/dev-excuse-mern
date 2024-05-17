import {
  fetchAllExcuses,
  fetchOneExcuse,
  fetchCreateOneExcuse,
  fetchSeedDB,
} from "@/services/fetch";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { Excuse } from "@/types";

export const useGetAllExcuses = () =>
  useQuery({
    queryKey: ["excuses"],
    queryFn: () => fetchAllExcuses(),
    select: (data) => data?.data,
  });

export const useGetOneExcuse = (http_code: Excuse["http_code"]) =>
  useQuery({
    queryKey: ["excuses", http_code],
    queryFn: () => fetchOneExcuse(Number(http_code)),
    enabled: !isNaN(Number(http_code)),
    select: (data) => data?.data,
  });

export const useCreateOneExcuse = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (newExcuse: Excuse) => fetchCreateOneExcuse(newExcuse),
    onSuccess: ({ data: excuse }) => {
      queryClient.invalidateQueries({ queryKey: ["excuses"] });
      return excuse;
    },
  });
};

export const useSeedDB = () => {
  const { refetch } = useGetAllExcuses();
  return useMutation({
    mutationFn: () => fetchSeedDB(),
    onSuccess: () => {
      refetch();
    },
  });
};
