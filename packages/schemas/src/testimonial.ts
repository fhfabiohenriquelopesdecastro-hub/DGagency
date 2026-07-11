import { z } from "zod";

export const testimonialSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  role: z.string().optional(),
  photo: z.string().optional(),
  text: z.string().min(10),
  video: z.string().optional(),
  rating: z.number().min(1).max(5).default(5),
  relatedCaseId: z.string().uuid().optional(),
  published: z.boolean().default(true),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;

export const testimonialUpdateSchema = testimonialSchema.partial();

export type TestimonialUpdateInput = z.infer<typeof testimonialUpdateSchema>;