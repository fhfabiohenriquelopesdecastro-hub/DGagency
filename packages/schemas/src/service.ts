import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().max(500),
  longDescription: z.string().optional(),
  icon: z.string().optional(),
  features: z.array(z.string()).default([]),
  image: z.string().optional(),
  published: z.boolean().default(false),
});

export type ServiceInput = z.infer<typeof serviceSchema>;

export const serviceUpdateSchema = serviceSchema.partial();

export type ServiceUpdateInput = z.infer<typeof serviceUpdateSchema>;