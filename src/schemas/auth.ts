import z from "zod";

export const loginschema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Minimal 6 karakter"),
});

export type LoginSchema = z.infer<typeof loginschema>;

export const registerschema = z.object({
  name: z.string().min(5, "Minimal 6 karakter"),
  email: z.email("Email tidak valid"),
  password: z.string().min(6, "Minimal 6 karakter"),
});

export type RegisterSchema = z.infer<typeof registerschema>;
