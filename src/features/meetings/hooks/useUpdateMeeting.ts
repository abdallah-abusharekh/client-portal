import { useMutation, useQueryClient } from "@tanstack/react-query";
import { meetingService } from "../services/meeting.service";
import { formValuesToMeeting } from "../mappers/meetings.mappers";
import { MeetingFormValues } from "../types/meetings.types";

type UpdateMeetingInput = {
  id: string;
  data: MeetingFormValues;
};

export function useUpdateMeeting() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateMeetingInput) =>
      meetingService.update(id, formValuesToMeeting(data)),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["meeting", variables.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["meetings"],
      });
    },
  });
}
