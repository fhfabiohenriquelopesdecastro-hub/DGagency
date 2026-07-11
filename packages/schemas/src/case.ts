import { z } from "zod";

export const caseSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  client: z.string().min(2),
  categoryId: z.string().uuid().optional(),
  shortDescription: z.string().max(200),
  longDescription: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  results: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  externalUrl: z.string().url().optional().or(z.literal("")),
  figmaUrl: z.string().url().optional().or(z.literal("")),
  mainImage: z.string().min(1),
  gallery: z.array(z.string()).default([]),
  video: z.string().optional(),
  tags: z.array(z.string()).default([]),
  accentColor: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/)
    .default("#7C3AED"),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

export type CaseInput = z.infer<typeof caseSchema>;

export const caseUpdateSchema = caseSchema.partial();

export type CaseUpdateInput = z.infer<typeof caseUpdateSchema>;