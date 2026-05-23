import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    phone: z
      .string()
      .optional()
      .or(z.literal(""))
      .refine(
        (value) => !value || /^[0-9+\-\s()]{7,20}$/.test(value),
        "Please enter a valid phone number",
      ),

    email: z.string().email("Please enter a valid email"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignInFormValues = z.infer<typeof signInSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;
