import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),

  status: z.enum(["TODO", "IN_PROGRESS", "REVIEW", "COMPLETED"]),

  priority: z.enum(["low", "medium", "high"]),

  dueDate: z.string().optional(),
});
