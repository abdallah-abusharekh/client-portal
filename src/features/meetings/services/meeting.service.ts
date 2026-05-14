import { mockParticipants } from "../mocks/meetings.mock";
import { Meeting } from "../types/meetings.types";
import { isMeetingPassed, hasConflictWithActiveMeetings } from "../utils/utils";
import { delay } from "../../../shared/utils/delay";

let mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "Team Sync",
    description: "Weekly team alignment and blockers review.",
    start: "2026-05-04T10:00",
    end: "2026-05-04T11:00",
    participants: mockParticipants.slice(0, 2),
  },
];

export const meetingService = {
  getById: async (id: string): Promise<Meeting | null> => {
    await delay(200);

    return mockMeetings.find((m) => m.id === id) || null;
  },

  getAll: async (): Promise<Meeting[]> => {
    await delay(200);
    return mockMeetings;
  },

  create: async (data: Omit<Meeting, "id">) => {
    if (isMeetingPassed(data.end)) {
      throw new Error("Cannot create a meeting in the past.");
    }

    if (hasConflictWithActiveMeetings(data.start, data.end, mockMeetings)) {
      throw new Error(
        "This time slot conflicts with an existing meeting. Please choose a different time.",
      );
    }

    const newMeeting = {
      ...data,
      id: crypto.randomUUID(),
    };

    mockMeetings.push(newMeeting);
    return newMeeting;
  },

  update: async (id: string, data: Partial<Meeting>) => {
    const meeting = mockMeetings.find((m) => m.id === id);

    if (!meeting) {
      throw new Error("Meeting not found.");
    }

    if (isMeetingPassed(meeting.end)) {
      throw new Error("Past meetings cannot be modified.");
    }

    mockMeetings = mockMeetings.map((m) =>
      m.id === id ? { ...m, ...data } : m,
    );

    return mockMeetings.find((m) => m.id === id)!;
  },
  remove: async (id: string) => {
    const meeting = mockMeetings.find((m) => m.id === id);

    if (!meeting) {
      throw new Error("Meeting not found.");
    }

    if (isMeetingPassed(meeting.end)) {
      throw new Error("Past meetings cannot be deleted.");
    }

    mockMeetings = mockMeetings.filter((m) => m.id !== id);
    return true;
  },
};
