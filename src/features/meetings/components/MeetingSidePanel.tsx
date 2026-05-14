"use client";

import { Meeting, MeetingUIState } from "../types/meetings.types";
import MeetingDetails from "./MeetingDetails";
import MeetingForm from "./MeetingForm";
import {
  formValuesToMeeting,
  meetingToFormValues,
} from "../mappers/meetings.mappers";
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
import { getMeetingDurationMinutes } from "../utils/utils";
import MeetingDetailsSkeleton from "./skeletons/MeetingDetailsSkeleton";
import ModalOverlay from "@/src/shared/components/ModalOverlay";

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
    return (
      <ModalOverlay open={true} containerClassName="justify-end items-stretch">
        <div
          ref={ref}
          className="relative flex flex-col bg-white shadow-xl w-full md:max-w-2xl h-dvh"
        >
          <MeetingDetailsSkeleton />
        </div>
      </ModalOverlay>
    );
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
    <ModalOverlay
      open={true}
      onClose={close}
      containerClassName="justify-end items-stretch"
    >
      <div
        ref={ref}
        className="relative flex flex-col bg-white shadow-xl w-full md:max-w-2xl h-dvh"
      >
        {mode === "view" && meeting && (
          <>
            <div className="flex-1 overflow-y-auto">
              <h1 className="p-4 pr-14 font-bold text-primary text-2xl">
                Meeting Details
              </h1>
              <MeetingDetails
                meeting={meeting}
                onEdit={() => openEdit(meeting.id)}
                onDelete={() => setOpenConfirm(true)}
                isPastMeeting={isPastMeeting}
              />
            </div>
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
            <div className="flex items-center gap-2 px-4 pt-4 pb-0">
              <button
                type="button"
                onClick={() => openView(meeting.id)}
                className="flex items-center gap-1 font-medium text-primary hover:text-primary-dark text-sm transition"
              >
                ← Back to Details
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
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
                    const meetingData = formValuesToMeeting(data, meeting.id);

                    if (
                      hasConflictWithActiveMeetings(
                        meetingData.start,
                        meetingData.end,
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
            </div>
          </>
        )}
        {mode === "create" && (
          <>
            <div className="flex-1 overflow-y-auto">
              <h1 className="p-4 font-bold text-primary text-2xl">
                Create a meeting
              </h1>
              <MeetingForm
                defaultValues={{
                  start: state.selectedStart?.toISOString(),
                  durationMinutes:
                    state.selectedStart && state.selectedEnd
                      ? getMeetingDurationMinutes(
                          state.selectedStart,
                          state.selectedEnd,
                        )
                      : 60,
                }}
                onSubmit={(data) => {
                  const meetingData = formValuesToMeeting(data);

                  if (
                    hasConflictWithActiveMeetings(
                      meetingData.start,
                      meetingData.end,
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
            </div>
          </>
        )}
        <button
          onClick={close}
          className="top-4 right-4 z-10 absolute bg-white/90 hover:bg-white shadow-sm p-2 rounded-full text-sm transition"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </ModalOverlay>
  );
}
