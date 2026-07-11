import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("E-mail inválido"),
  name: z.string().min(2),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  role: z.enum(["admin", "editor", "viewer"]).default("viewer"),
});

export type UserInput = z.infer<typeof userSchema>;

export const userUpdateSchema = userSchema.partial().extend({
  password: z.string().min(8).optional(),
});

export type UserUpdateInput = z.infer<typeof userUpdateSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type LoginInput = z.infer<typeof loginSchema>;