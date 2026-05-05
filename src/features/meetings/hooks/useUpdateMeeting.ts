import { useMutation, useQueryClient } from "@tanstack/react-query";
import { meetingService } from "../services/meeting.service";
import { formValuesToMeeting } from "../mappers/meetings.mappers";
import { Meeting } from "../types/meetings.types";
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

    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["meetings"] });
      await queryClient.cancelQueries({ queryKey: ["meeting", id] });

      const previousMeetings = queryClient.getQueryData<Meeting[]>([
        "meetings",
      ]);
      const previousMeeting = queryClient.getQueryData<Meeting>([
        "meeting",
        id,
      ]);
      const optimisticMeeting = formValuesToMeeting(data, id);

      queryClient.setQueryData<Meeting[]>(["meetings"], (currentMeetings) =>
        currentMeetings?.map((meeting) =>
          meeting.id === id ? optimisticMeeting : meeting,
        ),
      );

      queryClient.setQueryData<Meeting>(["meeting", id], optimisticMeeting);

      return { previousMeetings, previousMeeting, id };
    },

    onError: (_, __, context) => {
      if (!context) return;

      queryClient.setQueryData(["meetings"], context.previousMeetings);
      queryClient.setQueryData(
        ["meeting", context.id],
        context.previousMeeting,
      );
    },

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
