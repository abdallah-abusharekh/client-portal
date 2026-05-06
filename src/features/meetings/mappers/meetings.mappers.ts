import { Meeting, MeetingFormValues } from "../types/meetings.types";
import {
  getMeetingDurationMinutes,
  getMeetingEndFromStartAndDuration,
} from "../utils/utils";

export function meetingToFormValues(meeting: Meeting): MeetingFormValues {
  return {
    title: meeting.title,
    description: meeting.description,
    start: meeting.start,
    durationMinutes: getMeetingDurationMinutes(meeting.start, meeting.end),
    participants: meeting.participants,
    link: meeting.link,
  };
}

export function formValuesToMeeting(
  data: MeetingFormValues,
  id: string = crypto.randomUUID(),
): Meeting {
  return {
    id,
    title: data.title,
    description: data.description,
    start: data.start,
    end: getMeetingEndFromStartAndDuration(data.start, data.durationMinutes),
    participants: data.participants,
    link: data.link,
  };
}
