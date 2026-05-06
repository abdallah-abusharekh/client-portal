import { useMeetingUIState } from "../hooks/useMeetingUIState";

export type Meeting = {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  participants: Participant[];
  link?: string;
};

export type MeetingFormValues = {
  title: string;
  description?: string;
  start: string;
  durationMinutes: number;
  participants: Participant[];
  link?: string;
};

export type MeetingUIState = {
  isOpen: boolean;
  mode: "view" | "edit" | "create";
  selectedMeetingId?: string;
  selectedStart: Date | null;
  selectedEnd: Date | null;
};

export type MeetingUI = ReturnType<typeof useMeetingUIState>;

export type Action =
  | { type: "OPEN_VIEW"; meetingId: string }
  | { type: "OPEN_EDIT"; meetingId: string }
  | { type: "OPEN_CREATE"; start: Date; end: Date }
  | { type: "CLOSE" };

export type Participant = {
  id: string;
  name: string;
  jobTitle: string;
  email?: string;
};
