import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, updatedAt, id } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { CourseSectionTable } from "./courseSection";
import { UserLessionCompleteTable } from "./userLessionComplete";

export const lessionStatuses = ["public", "private", "preview"] as const;
export type LessionStatus = (typeof lessionStatuses)[number];
export const LessionStatusEnum = pgEnum("lession_status", lessionStatuses);

export const LessionTable = pgTable("lessions", {
  id,
  name: text().notNull(),
  description: text(),
  youtubeVideoId: text().notNull(),
  order: integer().notNull(),
  status: LessionStatusEnum().default("private").notNull(),
  sectionId: uuid()
    .notNull()
    .references(() => CourseSectionTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const LessionRelationships = relations(
  LessionTable,
  ({ one, many }) => ({
    section: one(CourseSectionTable, {
      fields: [LessionTable.sectionId],
      references: [CourseSectionTable.id],
    }),
    userLessionComplete: many(UserLessionCompleteTable),
  })
);
