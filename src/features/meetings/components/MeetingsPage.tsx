"use client";

import Button from "@/src/shared/components/Button";
import { useMeetingUIState } from "../hooks/useMeetingUIState";
import CalendarView from "./CalendarView";
import MeetingSidePanel from "./MeetingSidePanel";
import { BiCalendar } from "react-icons/bi";

export default function MeetingsPage() {
  const { state, openView, openCreate, openEdit, close } = useMeetingUIState();

  const handleCreateMeeting = () => {
    const start = new Date();
    const end = new Date(start);

    end.setHours(end.getHours() + 1);

    openCreate(start, end);
  };

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-3 mb-4">
        <h1 className="font-semibold text-2xl">Meetings</h1>

        <div className="flex flex-col">
          <Button
            onClick={handleCreateMeeting}
            className="mb-1 w-fit sm:w-auto"
          >
            Create Meeting <BiCalendar />
          </Button>
          <p className="text-gray-500 text-xs">
            You can click on any date to create a meeting
          </p>
        </div>
      </div>

      <CalendarView openView={openView} openCreate={openCreate} />

      <MeetingSidePanel
        state={state}
        openEdit={openEdit}
        openView={openView}
        close={close}
      />
    </div>
  );
}
