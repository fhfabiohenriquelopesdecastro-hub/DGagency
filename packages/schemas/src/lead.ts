import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Conte um pouco mais sobre o projeto"),
  origin: z.string().default("site"),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const leadUpdateSchema = z.object({
  status: z.enum([
    "novo",
    "em_contato",
    "qualificado",
    "ganho",
    "perdido",
  ]),
  notes: z.string().optional(),
});

export type LeadUpdateInput = z.infer<typeof leadUpdateSchema>;