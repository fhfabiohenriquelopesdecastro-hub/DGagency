import { pgTable, uuid, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const siteSettings = pgTable("site_settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  siteName: text("site_name").notNull(),
  logo: text("logo"),
  logoLight: text("logo_light"),
  tagline: text("tagline"),
  email: text("email"),
  phone: text("phone"),
  whatsapp: text("whatsapp"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  workingHours: text("working_hours"),
  socialLinks: jsonb("social_links")
    .$type<{
      instagram?: string;
      linkedin?: string;
      github?: string;
      twitter?: string;
    }>()
    .default({}),
  seoDefaults: jsonb("seo_defaults")
    .$type<{
      metaTitle?: string;
      metaDescription?: string;
      ogImage?: string;
    }>()
    .default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type SiteSetting = typeof siteSettings.$inferSelect;
export type NewSiteSetting = typeof siteSettings.$inferInsert;