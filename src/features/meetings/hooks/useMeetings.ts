import { useQuery } from "@tanstack/react-query";
import { meetingService } from "../services/meeting.service";

export function useMeetings() {
  return useQuery({
    queryKey: ["meetings"],
    queryFn: meetingService.getAll,
  });
}
