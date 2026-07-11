import { z } from "zod";

export const faqCategorySchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  published: z.boolean().default(false),
});

export type FaqCategoryInput = z.infer<typeof faqCategorySchema>;

export const faqSchema = z.object({
  categoryId: z.string().uuid(),
  question: z.string().min(10).max(300),
  answer: z.string().min(10),
  published: z.boolean().default(false),
});

export type FaqInput = z.infer<typeof faqSchema>;

export const faqUpdateSchema = faqSchema.partial();

export type FaqUpdateInput = z.infer<typeof faqUpdateSchema>;