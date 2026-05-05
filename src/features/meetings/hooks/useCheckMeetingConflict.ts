import { useMeetings } from "./useMeetings";
import { hasConflictWithActiveMeetings } from "../utils/utils";

export function useCheckMeetingConflict() {
  const { data: meetings = [] } = useMeetings();

  const checkConflict = (
    start: string | undefined,
    end: string | undefined,
  ): string | null => {
    if (!start || !end) return null;

    if (hasConflictWithActiveMeetings(start, end, meetings)) {
      return "This time slot conflicts with an existing meeting. Please choose a different time.";
    }

    return null;
  };

  return { checkConflict };
}
