import { z } from "zod";

export const editProjectSchema = z.object({
  title: z.string().min(3),

  description: z.string().optional(),

  status: z.enum(["in-progress", "review", "completed", "paused"]),

  priority: z.enum(["low", "medium", "high"]),

  budget: z.number().optional(),

  dueDate: z.string().optional(),

  tags: z.string().optional(),
});
