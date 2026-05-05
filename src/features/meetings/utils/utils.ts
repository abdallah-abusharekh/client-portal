import { DateClickArg } from "@fullcalendar/interaction/index.js";
import { MeetingFormValues } from "../types/meetings.types";

export function getMeetingTimeFromClick(info: DateClickArg) {
  const viewType = info.view.type;
  const clickedDate = new Date(info.date);

  const isMonthView = viewType === "dayGridMonth";

  const start = new Date(clickedDate);

  if (isMonthView) {
    const now = new Date();
    start.setHours(now.getHours());
    start.setMinutes(now.getMinutes());
  }

  const end = new Date(start);
  end.setHours(end.getHours() + 1);

  return { start, end };
}

export function toDateTimeLocal(date: Date) {
  const local = new Date(date);
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset());

  return local.toISOString().slice(0, 16);
}

export function normalizeMeetingFormDefaultValues(
  defaultValues?: Partial<MeetingFormValues>,
): MeetingFormValues {
  return {
    title: defaultValues?.title ?? "",
    description: defaultValues?.description ?? "",
    start: defaultValues?.start
      ? toDateTimeLocal(new Date(defaultValues.start))
      : "",
    durationMinutes: defaultValues?.durationMinutes ?? 60,
    participants: defaultValues?.participants ?? [],
    link: defaultValues?.link ?? "",
  };
}

export function getMeetingDurationMinutes(
  start: string | Date,
  end: string | Date,
) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return 60;
  }

  return Math.max(
    1,
    Math.round((endDate.getTime() - startDate.getTime()) / 60000),
  );
}

export function getMeetingEndFromStartAndDuration(
  start: string | Date,
  durationMinutes: number,
) {
  const endDate = new Date(start);
  endDate.setMinutes(endDate.getMinutes() + durationMinutes);

  return toDateTimeLocal(endDate);
}

export function isMeetingPassed(end: string | Date) {
  const endDate = new Date(end);

  if (Number.isNaN(endDate.getTime())) return false;

  return endDate.getTime() < Date.now();
}

export function doTimeRangesOverlap(
  start1: string | Date,
  end1: string | Date,
  start2: string | Date,
  end2: string | Date,
): boolean {
  const s1 = new Date(start1).getTime();
  const e1 = new Date(end1).getTime();
  const s2 = new Date(start2).getTime();
  const e2 = new Date(end2).getTime();

  if (
    Number.isNaN(s1) ||
    Number.isNaN(e1) ||
    Number.isNaN(s2) ||
    Number.isNaN(e2)
  ) {
    return false;
  }

  return s1 < e2 && e1 > s2;
}

export function hasConflictWithActiveMeetings(
  newStart: string | Date,
  newEnd: string | Date,
  existingMeetings: Array<{ start: string; end: string }>,
): boolean {
  return existingMeetings.some((meeting) => {
    if (isMeetingPassed(meeting.end)) {
      return false;
    }

    return doTimeRangesOverlap(newStart, newEnd, meeting.start, meeting.end);
  });
}
