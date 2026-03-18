import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  budget: z.coerce.number().min(1),
  dueDate: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  tags: z.string().optional(),
});

export type CreateProjectFormValues = z.input<typeof createProjectSchema>; // for form

export type CreateProjectData = z.infer<typeof createProjectSchema>; // after validation
