"use client";

import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MeetingFormValues } from "../types/meetings.types";
import ParticipantSelector from "./ParticipantSelector";
import { mockParticipants } from "../mocks/meetings.mock";

import { meetingFormSchema } from "../schemas/meetingForm.schema";
import { normalizeMeetingFormDefaultValues } from "../utils/utils";

type Props = {
  defaultValues?: Partial<MeetingFormValues>;
  onSubmit: (data: MeetingFormValues) => void;
};

export default function MeetingForm({ defaultValues, onSubmit }: Props) {
  const normalizedDefaultValues = useMemo<MeetingFormValues>(
    () => normalizeMeetingFormDefaultValues(defaultValues),
    [defaultValues],
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<MeetingFormValues>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues: normalizedDefaultValues,
  });

  const selectedParticipants = useWatch({
    control,
    name: "participants",
  });

  useEffect(() => {
    reset(normalizedDefaultValues);
  }, [normalizedDefaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-6 pb-4 h-[90%]"
    >
      {/* FIELDS */}
      <div className="space-y-4 p-2 h-full overflow-auto">
        {/* TITLE */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Meeting Title
          </label>
          <input
            {...register("title")}
            placeholder="e.g. Sprint Planning"
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
          />
          {errors.title && (
            <p className="mt-1 text-red-600 text-xs">{errors.title.message}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Add meeting context, agenda, or notes"
            rows={4}
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition resize-none"
          />
          <p className="mt-1 text-gray-500 text-xs">
            Optional. Keep it short and useful for attendees.
          </p>
          {errors.description && (
            <p className="mt-1 text-red-600 text-xs">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* START + END */}
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Start
            </label>
            <input
              {...register("start")}
              type="datetime-local"
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
            />
            {errors.start && (
              <p className="mt-1 text-red-600 text-xs">
                {errors.start.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 text-sm">
              End
            </label>
            <input
              {...register("end")}
              type="datetime-local"
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
            />
            {errors.end && (
              <p className="mt-1 text-red-600 text-xs">{errors.end.message}</p>
            )}
          </div>
        </div>

        {/* LINK */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Meeting Link
          </label>
          <input
            {...register("link")}
            placeholder="https://meet.google.com/..."
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
          />
          {errors.link && (
            <p className="mt-1 text-red-600 text-xs">{errors.link.message}</p>
          )}
        </div>

        {/* PARTICIPANTS */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Participants
          </label>

          <div className="mt-2">
            <ParticipantSelector
              value={selectedParticipants || []}
              options={mockParticipants}
              onChange={(val) =>
                setValue("participants", val, {
                  shouldValidate: true,
                  shouldDirty: true,
                })
              }
            />
          </div>
          {errors.participants && (
            <p className="mt-1 text-red-600 text-xs">
              {errors.participants.message}
            </p>
          )}
        </div>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="bg-primary hover:opacity-90 mt-auto py-3 rounded-lg w-full font-medium text-white text-sm transition"
      >
        Save Meeting
      </button>
    </form>
  );
}
