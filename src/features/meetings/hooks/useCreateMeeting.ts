import { useMutation, useQueryClient } from "@tanstack/react-query";
import { meetingService } from "../services/meeting.service";
import { MeetingFormValues } from "../types/meetings.types";
import { formValuesToMeeting } from "../mappers/meetings.mappers";

export function useCreateMeeting() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MeetingFormValues) =>
      meetingService.create(formValuesToMeeting(data)),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
    },
  });
}
