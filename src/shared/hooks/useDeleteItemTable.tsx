import { toast } from "@/components/ui";
import { queryClient } from "@/lib/query";
import { HTTP } from "@/services";
import { QueryKey, useMutation } from "@tanstack/react-query";

export const useDeleteItemTable = (
  id: string,
  query: QueryKey,
  url: string
) => {
  const { mutate, error, data } = useMutation({
    mutationFn: async () => {
      await HTTP.delete(`v1/${url}?id=${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(query);
      toast({
        title: "Item excluído com sucesso",
      });
    },
    onError: () => {
      toast({
        title: "Não foi possível excluir o item",
        description: `${error}`,
      });
    },
  });

  return { mutate, error, data };
};
