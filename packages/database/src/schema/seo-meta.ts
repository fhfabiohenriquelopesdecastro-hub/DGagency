import { pgTable, uuid, text, uniqueIndex } from "drizzle-orm/pg-core";

export const seoMeta = pgTable(
  "seo_meta",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    entityType: text("entity_type").notNull(),
    entityId: uuid("entity_id").notNull(),
    metaTitle: text("meta_title"),
    metaDescription: text("meta_description"),
    ogImage: text("og_image"),
    canonicalUrl: text("canonical_url"),
  },
  (table) => ({
    entityTypeEntityIdUnique: uniqueIndex("idx_seo_meta_entity").on(
      table.entityType,
      table.entityId
    ),
  })
);

export type SeoMeta = typeof seoMeta.$inferSelect;
export type NewSeoMeta = typeof seoMeta.$inferInsert;