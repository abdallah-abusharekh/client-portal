import { Meeting, MeetingFormValues } from "../types/meetings.types";

export function meetingToFormValues(meeting: Meeting): MeetingFormValues {
  return {
    title: meeting.title,
    start: meeting.start,
    end: meeting.end,
    participants: meeting.participants,
    link: meeting.link,
  };
}

export function formValuesToMeeting(data: MeetingFormValues): Meeting {
  return {
    id: crypto.randomUUID(),
    title: data.title,
    start: data.start,
    end: data.end,
    participants: data.participants,
    link: data.link,
  };
}
