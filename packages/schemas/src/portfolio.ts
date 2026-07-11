import { z } from "zod";

export const portfolioSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().max(500),
  categoryId: z.string().uuid().optional(),
  image: z.string().min(1),
  url: z.string().url().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

export type PortfolioInput = z.infer<typeof portfolioSchema>;

export const portfolioUpdateSchema = portfolioSchema.partial();

export type PortfolioUpdateInput = z.infer<typeof portfolioUpdateSchema>;