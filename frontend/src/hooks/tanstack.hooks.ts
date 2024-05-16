import {
  fetchAllExcuses,
  fetchOneExcuse,
  fetchCreateOneExcuse,
} from "@/services/fetch";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { Excuse } from "@/types";

export const useGetAllExcuses = () => {
  return useQuery({
    queryKey: ["excuses"],
    queryFn: () => fetchAllExcuses(),
    select: (data) => data?.data,
  });
};

export const useGetOneExcuse = (http_code: Excuse["http_code"]) => {
  return useQuery({
    queryKey: ["excuses", http_code],
    queryFn: () => fetchOneExcuse(Number(http_code)),
    enabled: !isNaN(Number(http_code)),
    select: (data) => data?.data,
  });
};

export const useCreateOneExcuse = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (newExcuse: Excuse) => fetchCreateOneExcuse(newExcuse),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["excuses"] });
      return data.data;
    },
  });
};
