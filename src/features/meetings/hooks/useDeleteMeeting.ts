import { useMutation, useQueryClient } from "@tanstack/react-query";
import { meetingService } from "../services/meeting.service";

export function useDeleteMeeting() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => meetingService.remove(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["meetings"],
      });
    },
  });
}
