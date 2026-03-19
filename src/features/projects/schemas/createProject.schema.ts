import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3),

  description: z.string().optional(),

  budget: z.number().optional(),

  dueDate: z.string().optional(),

  priority: z.enum(["low", "medium", "high"]),

  status: z.enum(["in-progress", "review", "completed", "paused"]),

  tags: z.string().optional(),
});
