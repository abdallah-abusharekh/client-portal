"use client";

import { Meeting, MeetingUIState } from "../types/meetings.types";
import MeetingDetails from "./MeetingDetails";
import MeetingForm from "./MeetingForm";
import { meetingToFormValues } from "../mappers/meetings.mappers";
import { useMeetingById } from "../hooks/useMeetingById";
import { useCreateMeeting } from "../hooks/useCreateMeeting";
import { useUpdateMeeting } from "../hooks/useUpdateMeeting";
import { useDeleteMeeting } from "../hooks/useDeleteMeeting";
import { useRef, useState } from "react";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";
import toast from "react-hot-toast";
import ConfirmModal from "@/src/shared/components/ConfirmModal";
import { isMeetingPassed, hasConflictWithActiveMeetings } from "../utils/utils";
import { useMeetings } from "../hooks/useMeetings";

export default function MeetingSidePanel({
  state,
  openEdit,
  openView,
  close,
}: {
  state: MeetingUIState;
  openEdit: (id: string) => void;
  openView: (id: string) => void;
  close: () => void;
}) {
  const { mode, selectedMeetingId } = state;
  const meetingId = selectedMeetingId ?? undefined;
  const { data: meeting, isLoading } = useMeetingById(meetingId);
  const { data: allMeetings = [] } = useMeetings();
  const createMeeting = useCreateMeeting();
  const updateMeeting = useUpdateMeeting();
  const deleteMeeting = useDeleteMeeting();

  const [openConfirm, setOpenConfirm] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, close);

  if (!state.isOpen) return null;

  if (isLoading && selectedMeetingId) {
    return <div className="p-4">Loading...</div>;
  }

  if (selectedMeetingId && !meeting && !isLoading) {
    return <div className="p-4">Meeting not found</div>;
  }

  const isPastMeeting = meeting ? isMeetingPassed(meeting.end) : false;

  function handleDelete(meeting: Meeting) {
    if (isMeetingPassed(meeting.end)) {
      toast.error("Past meetings cannot be deleted.");
      setOpenConfirm(false);
      return;
    }

    deleteMeeting.mutate(meeting.id, {
      onSuccess: () => {
        toast.success("Meeting deleted successfully");
        setOpenConfirm(false);
        close();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete meeting");
      },
    });
  }

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/20">
      <div
        ref={ref}
        className="top-0 right-0 z-10 fixed bg-white shadow-xl w-150 h-full overflow-auto"
      >
        {mode === "view" && meeting && (
          <>
            <h1 className="p-4 font-bold text-primary text-2xl">
              Meeting Details
            </h1>
            <MeetingDetails
              meeting={meeting}
              onEdit={() => openEdit(meeting.id)}
              onDelete={() => setOpenConfirm(true)}
              isPastMeeting={isPastMeeting}
            />
            <ConfirmModal
              open={openConfirm}
              title="Delete Meeting"
              variant="danger"
              description="Are you sure that you want to delete this meeting?"
              onClose={() => setOpenConfirm(false)}
              onConfirm={() => handleDelete(meeting)}
            />
          </>
        )}
        {mode === "edit" && meeting && (
          <>
            <button
              type="button"
              onClick={() => openView(meeting.id)}
              className="flex items-center gap-1 px-2 pt-4 pb-0 font-medium text-primary hover:text-primary-dark text-sm transition"
            >
              ← Back to Details
            </button>
            <h1 className="p-4 font-bold text-primary text-2xl">
              Update meeting
            </h1>
            {isPastMeeting ? (
              <div className="space-y-3 p-6 text-gray-600 text-sm">
                <p>This meeting has already passed.</p>
                <p>You cannot update past meetings.</p>
              </div>
            ) : (
              <MeetingForm
                defaultValues={meetingToFormValues(meeting)}
                onSubmit={(data) => {
                  if (
                    hasConflictWithActiveMeetings(
                      data.start,
                      data.end,
                      allMeetings.filter((m) => m.id !== meeting.id),
                    )
                  ) {
                    toast.error(
                      "The new time slot conflicts with an existing meeting. Please choose a different time.",
                    );
                    return;
                  }

                  updateMeeting.mutate(
                    {
                      id: meeting.id,
                      data,
                    },
                    {
                      onSuccess: () => {
                        toast.success("Meeting updated successfully");
                        close();
                      },
                      onError: (error) => {
                        toast.error(
                          error.message || "Failed to update meeting",
                        );
                      },
                    },
                  );
                }}
              />
            )}
          </>
        )}
        {mode === "create" && (
          <>
            <h1 className="p-4 font-bold text-primary text-2xl">
              Create a meeting
            </h1>
            <MeetingForm
              defaultValues={{
                start: state.selectedStart?.toISOString(),
                end: state.selectedEnd?.toISOString(),
              }}
              onSubmit={(data) => {
                if (
                  hasConflictWithActiveMeetings(
                    data.start,
                    data.end,
                    allMeetings,
                  )
                ) {
                  toast.error(
                    "This time slot conflicts with an existing meeting. Please choose a different time.",
                  );
                  return;
                }

                createMeeting.mutate(data, {
                  onSuccess: () => {
                    toast.success("Meeting created successfully");
                    close();
                  },
                  onError: (error) => {
                    toast.error(error.message || "Failed to create meeting");
                  },
                });
              }}
            />
          </>
        )}
        <button onClick={close} className="top-5 right-5 absolute text-sm">
          ✕
        </button>
      </div>
    </div>
  );
}
