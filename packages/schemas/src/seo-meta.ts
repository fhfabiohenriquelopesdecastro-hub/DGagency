import { z } from "zod";

export const seoMetaSchema = z.object({
  entityType: z.enum(["case", "page", "portfolio_item"]),
  entityId: z.string().uuid(),
  metaTitle: z.string().max(60).optional(),
  metaDescription: z.string().max(160).optional(),
  ogImage: z.string().optional(),
  canonicalUrl: z.string().url().optional().or(z.literal("")),
});

export type SeoMetaInput = z.infer<typeof seoMetaSchema>;

export const seoMetaUpdateSchema = seoMetaSchema.partial();

export type SeoMetaUpdateInput = z.infer<typeof seoMetaUpdateSchema>;