import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { categories } from "./categories";

export const cases = pgTable("cases", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  client: text("client").notNull(),
  categoryId: uuid("category_id").references(() => categories.id, {
    onDelete: "set null",
  }),
  shortDescription: text("short_description").notNull(),
  longDescription: text("long_description"),
  problem: text("problem"),
  solution: text("solution"),
  results: text("results"),
  technologies: jsonb("technologies").$type<string[]>().default([]),
  externalUrl: text("external_url"),
  figmaUrl: text("figma_url"),
  mainImage: text("main_image").notNull(),
  gallery: jsonb("gallery").$type<string[]>().default([]),
  video: text("video"),
  tags: jsonb("tags").$type<string[]>().default([]),
  accentColor: text("accent_color").default("#7C3AED"),
  featured: boolean("featured").default(false),
  published: boolean("published").default(false),
  order: integer("order").default(0),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),
});

export type Case = typeof cases.$inferSelect;
export type NewCase = typeof cases.$inferInsert;