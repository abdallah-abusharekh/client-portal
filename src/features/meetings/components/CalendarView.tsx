"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { EventDropArg } from "@fullcalendar/core";
import toast from "react-hot-toast";

import { useMeetings } from "../hooks/useMeetings";
import { getMeetingTimeFromClick, isMeetingPassed } from "../utils/utils";
import { useUpdateMeeting } from "../hooks/useUpdateMeeting";
import { handleEventDrop } from "../utils/handleEventDrop";
import CalendarSkeleton from "./skeletons/CalendarSkeleton";
export default function CalendarView({
  openView,
  openCreate,
}: {
  openView: (id: string) => void;
  openCreate: (start: Date, end: Date) => void;
}) {
  const { data: meetings = [], isLoading } = useMeetings();
  const updateMeeting = useUpdateMeeting();
  const [defaultView, setDefaultView] = useState("dayGridMonth");
  const [toolbarRight, setToolbarRight] = useState(
    "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  );

  useEffect(() => {
    const updateDefaultView = () => {
      const width = window.innerWidth;

      setDefaultView(width <= 1024 ? "listWeek" : "dayGridMonth");
      setToolbarRight(
        width <= 640
          ? "timeGridDay,listWeek"
          : "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      );
    };

    updateDefaultView();
    window.addEventListener("resize", updateDefaultView);

    return () => window.removeEventListener("resize", updateDefaultView);
  }, []);

  if (isLoading) {
    return <CalendarSkeleton />;
  }

  const calendarEvents = meetings.map((m) => ({
    id: m.id,
    title: m.title,
    start: m.start,
    end: m.end,
  }));

  // Get meetings for today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayMeetings = meetings.filter((m) => {
    const meetingStart = new Date(m.start);
    return meetingStart >= today && meetingStart < tomorrow;
  });

  const onEventDropHandler = (info: EventDropArg) => {
    handleEventDrop({
      info,
      meetings,
      onUpdateMeeting: (input) => {
        updateMeeting.mutate(input, {
          onSuccess: () => {
            toast.success("Meeting updated successfully");
          },
          onError: (error) => {
            toast.error(error.message || "Failed to update meeting");
            info.revert();
          },
        });
      },
    });
  };

  return (
    <div className="space-y-4">
      {/* Today's Meetings Note */}
      <div className="bg-blue-50 p-3 border border-blue-200 rounded-lg">
        {todayMeetings.length > 0 ? (
          <p className="text-blue-900 text-sm">
            <span className="font-semibold">
              {todayMeetings.length} meeting
              {todayMeetings.length !== 1 ? "s" : ""}
            </span>{" "}
            scheduled for today
          </p>
        ) : (
          <p className="text-blue-900 text-sm">
            No meetings scheduled for today
          </p>
        )}
      </div>

      <div className="bg-white shadow p-4 rounded-xl meeting-calendar">
        <FullCalendar
          key={defaultView}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          initialView={defaultView}
          height="80vh"
          editable={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: toolbarRight,
          }}
          events={calendarEvents}
          eventClick={(info) => {
            const id = info.event.id;
            if (!id) return;

            openView(id);
          }}
          eventDrop={onEventDropHandler}
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
    </div>
  );
}
