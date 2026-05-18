import z from "zod";

export const CreateAuthSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(4, "Password is required"),
});

export const UpdateAuthSchema = z.object({
  fullName: z.string().min(1, "Name is required").optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
  gender: z.string().optional(),
  birth_date: z.string().optional(),
});
