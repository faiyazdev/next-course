import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, updatedAt, id } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { CourseTable } from "./course";
import { LessionTable } from "./Lession-Schema";
export const courseSectionStatuses = ["public", "private"] as const;
export type CourseSectionStatus = (typeof courseSectionStatuses)[number];
export const CourseSectionStatusEnum = pgEnum(
  "product_section_status",
  courseSectionStatuses
);

export const CourseSectionTable = pgTable("course_sections", {
  id,
  name: text().notNull(),
  order: integer().notNull(),
  status: CourseSectionStatusEnum().default("private").notNull(),
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const CourseSectionRelationships = relations(
  CourseSectionTable,
  ({ one, many }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
    lessions: many(LessionTable),
  })
);
