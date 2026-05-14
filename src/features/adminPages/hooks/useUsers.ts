import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: usersService.getUsers,
  });
};
