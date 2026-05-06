import * as z from "zod";

export const profileEditSchema = z.object({
  name: z.string().min(2, "Name is required").max(50),
  jobTitle: z.string().max(50).optional().or(z.literal("")),
  email: z.email("Invalid email address"),
  bio: z
    .string()
    .max(300, "Bio must be at most 300 characters")
    .optional()
    .or(z.literal("")),
});

export type ProfileEditValues = z.infer<typeof profileEditSchema>;
