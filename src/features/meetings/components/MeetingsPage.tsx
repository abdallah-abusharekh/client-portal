"use client";

import { useMeetingUIState } from "../hooks/useMeetingUIState";
import CalendarView from "./CalendarView";
import MeetingSidePanel from "./MeetingSidePanel";

export default function MeetingsPage() {
  const { state, openView, openCreate, openEdit, close } = useMeetingUIState();

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <h1 className="mb-4 font-semibold text-2xl">Meetings</h1>

      <CalendarView openView={openView} openCreate={openCreate} />

      <MeetingSidePanel state={state} openEdit={openEdit} openView={openView} close={close} />
    </div>
  );
}
