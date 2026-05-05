import { useReducer } from "react";
import { Action, MeetingUIState } from "../types/meetings.types";

function reducer(state: MeetingUIState, action: Action): MeetingUIState {
  switch (action.type) {
    case "OPEN_VIEW":
      return {
        isOpen: true,
        mode: "view",
        selectedMeetingId: action.meetingId,
        selectedStart: state.selectedStart,
        selectedEnd: state.selectedEnd,
      };

    case "OPEN_EDIT":
      return {
        isOpen: true,
        mode: "edit",
        selectedMeetingId: action.meetingId,
        selectedStart: state.selectedStart,
        selectedEnd: state.selectedEnd,
      };

    case "OPEN_CREATE":
      return {
        isOpen: true,
        mode: "create",
        selectedMeetingId: undefined,
        selectedStart: action.start,
        selectedEnd: action.end,
      };

    case "CLOSE":
      return {
        isOpen: false,
        mode: "view",
        selectedMeetingId: undefined,
        selectedStart: state.selectedStart,
        selectedEnd: state.selectedEnd,
      };

    default:
      return state;
  }
}

const initialState: MeetingUIState = {
  isOpen: false,
  mode: "view",
  selectedMeetingId: undefined,
  selectedStart: null,
  selectedEnd: null,
};

export function useMeetingUIState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    openView: (id: string) => dispatch({ type: "OPEN_VIEW", meetingId: id }),

    openEdit: (id: string) => dispatch({ type: "OPEN_EDIT", meetingId: id }),

    openCreate: (start: Date, end: Date) =>
      dispatch({ type: "OPEN_CREATE", start, end }),

    close: () => dispatch({ type: "CLOSE" }),
  };
}
