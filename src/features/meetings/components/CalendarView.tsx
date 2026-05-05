"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import toast from "react-hot-toast";

import { useMeetings } from "../hooks/useMeetings";
import { getMeetingTimeFromClick, isMeetingPassed } from "../utils/utils";
export default function CalendarView({
  openView,
  openCreate,
}: {
  openView: (id: string) => void;
  openCreate: (start: Date, end: Date) => void;
}) {
  const { data: meetings = [] } = useMeetings();

  const calendarEvents = meetings.map((m) => ({
    id: m.id,
    title: m.title,
    start: m.start,
    end: m.end,
  }));

  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="80vh"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={calendarEvents}
        eventClick={(info) => {
          const id = info.event.id;
          if (!id) return;

          openView(id);
        }}
        dateClick={(info) => {
          const { start, end } = getMeetingTimeFromClick(info);

          if (isMeetingPassed(end)) {
            toast.error("Cannot create a meeting in the past.");
            return;
          }

          openCreate(start, end);
        }}
      />
    </div>
  );
}
