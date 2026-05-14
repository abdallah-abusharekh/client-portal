import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { usersService } from "../services/usersService";

export const useUpdateUsersStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      ids,
      status,
    }: {
      ids: string[];
      status: "active" | "suspended";
    }) => usersService.updateUsersStatus(ids, status),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      toast.success(
        `${variables.ids.length} user${variables.ids.length > 1 ? "s" : ""} ${
          variables.status === "active" ? "activated" : "suspended"
        } successfully`,
      );
    },

    onError: () => {
      toast.error("Failed to update users");
    },
  });
};
