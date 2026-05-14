import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { usersService } from "../services/usersService";

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ ids }: { ids: string[] }) => usersService.deleteUsers(ids),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      toast.success(
        `${variables.ids.length} user${variables.ids.length > 1 ? "s" : ""} ${"deleted"} successfully`,
      );
    },

    onError: () => {
      toast.error("Failed to delete users");
    },
  });
};
