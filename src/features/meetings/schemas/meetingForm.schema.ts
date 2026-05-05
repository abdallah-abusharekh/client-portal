import { z } from "zod";

const participantSchema = z.object({
  id: z.string(),
  name: z.string(),
  jobTitle: z.string(),
  email: z.email().optional(),
});

export const meetingFormSchema = z
  .object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    description: z
      .string()
      .trim()
      .max(500, "Description must be 500 characters or less")
      .optional(),
    start: z.string().min(1, "Start date and time is required"),
    durationMinutes: z
      .number()
      .int("Duration must be a whole number")
      .min(1, "Duration must be at least 1 minute")
      .max(1440, "Duration must be 1440 minutes or less"),
    participants: z
      .array(participantSchema)
      .min(1, "Select at least one participant"),
    link: z
      .string()
      .trim()
      .optional()
      .refine(
        (value) => !value || /^https?:\/\//i.test(value),
        "Meeting link must start with http:// or https://",
      ),
  })
  .refine(
    (data) => {
      if (!data.start || !data.durationMinutes) return true;

      return data.durationMinutes > 0;
    },
    {
      path: ["durationMinutes"],
      message: "Duration must be greater than zero",
    },
  )
  .refine(
    (data) => {
      if (!data.start) return true;

      return new Date(data.start).getTime() >= Date.now();
    },
    {
      path: ["start"],
      message: "Start date cannot be in the past",
    },
  );
