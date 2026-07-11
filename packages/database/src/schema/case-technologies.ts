import { pgTable, uuid } from "drizzle-orm/pg-core";
import { cases } from "./cases";
import { technologies } from "./technologies";

export const caseTechnologies = pgTable("case_technologies", {
  caseId: uuid("case_id")
    .notNull()
    .references(() => cases.id, { onDelete: "cascade" }),
  technologyId: uuid("technology_id")
    .notNull()
    .references(() => technologies.id, { onDelete: "cascade" }),
});

export type CaseTechnology = typeof caseTechnologies.$inferSelect;
export type NewCaseTechnology = typeof caseTechnologies.$inferInsert;