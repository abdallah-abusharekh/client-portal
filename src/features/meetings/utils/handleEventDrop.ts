import { EventDropArg } from "@fullcalendar/core";
import toast from "react-hot-toast";
import { Meeting, MeetingFormValues } from "../types/meetings.types";
import { isMeetingPassed, hasConflictWithActiveMeetings } from "./utils";

type HandleEventDropParams = {
  info: EventDropArg;
  meetings: Meeting[];
  onUpdateMeeting: (input: { id: string; data: MeetingFormValues }) => void;
};

export function handleEventDrop({
  info,
  meetings,
  onUpdateMeeting,
}: HandleEventDropParams) {
  const { event } = info;
  const newStart = event.start;
  const newEnd = event.end;

  // Validate that start and end times exist
  if (!newStart || !newEnd) {
    toast.error("Invalid meeting times");
    info.revert();
    return;
  }

  // Validate new times are not in the past
  if (isMeetingPassed(newEnd)) {
    toast.error("Cannot move meeting to the past");
    info.revert();
    return;
  }

  // Check for conflicts with other meetings
  const meetingBeingMoved = meetings.find((m) => m.id === event.id);
  if (!meetingBeingMoved) {
    toast.error("Meeting not found");
    info.revert();
    return;
  }

  const otherMeetings = meetings.filter((m) => m.id !== event.id);
  if (hasConflictWithActiveMeetings(newStart, newEnd, otherMeetings)) {
    toast.error("Time slot conflicts with another meeting");
    info.revert();
    return;
  }

  // Calculate duration in minutes
  const durationMinutes = Math.round(
    (newEnd.getTime() - newStart.getTime()) / 60000,
  );

  // Update the meeting
  onUpdateMeeting({
    id: event.id,
    data: {
      title: meetingBeingMoved.title,
      description: meetingBeingMoved.description,
      start: newStart.toISOString(),
      durationMinutes,
      participants: meetingBeingMoved.participants,
      link: meetingBeingMoved.link,
    },
  });
}
