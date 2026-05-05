import { useQuery } from "@tanstack/react-query";
import { meetingService } from "../services/meeting.service";

export function useMeetingById(id?: string) {
  return useQuery({
    queryKey: ["meeting", id],
    queryFn: () => {
      if (!id) throw new Error("Meeting id is required");
      return meetingService.getById(id);
    },
    enabled: !!id,
  });
}
